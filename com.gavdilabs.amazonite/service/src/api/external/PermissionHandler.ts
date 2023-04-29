import { Request } from "@sap/cds/apis/services";
import {
  Handler,
  OnCreate,
  OnDelete,
  OnRead,
  OnUpdate,
  Req,
} from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import { SanitizedEntity } from "../../entities/EasyPermissionService";
import SF from "../../services/SF";
import ServiceXMLParser from "../../core/utils/xmlParser";
import { IPermissionsOut, IPermissionsOutRole } from "common";

/**
 * Interface for the XML parsing. @ attributes indicate 'tag attributes'. This prefix is specified
 * in ServiceXMLParser.ts
 */

interface IPermissionXml {
  "user-permission": {
    user: {
      "@id": string;
      role: [
        {
          "@id": string;
          "@name": string;
          "@description": string;
          category: {
            "@name": string;
            permissions: {
              "permission-unit": [
                {
                  "on-off-permission": {
                    "permission-item": {
                      "@perm-type": string;
                      "@permission-string-value": string;
                      message: {
                        "@key": string;
                        content: {
                          "#text"
                        };
                      };
                    };
                  };
                }
              ];
            };
          };
        }
      ];
    };
  };
}

/**
 * Raw data coming from SF function import. 1 property with a huge XML string is what u get.
 */
interface ISFPermissionDataRaw {
  getUsersPermissions: string;
}

@Handler(SanitizedEntity.Permissions)
@Service()
export default class PermissionHanlder {
  @Inject("sf")
  private sfService: SF;

  @OnRead()
  public async OnRead(@Req() req: Request): Promise<unknown> {
    //First validate if we have valid keys
    const userIdKey = req.data.userId ? req.data.userId : undefined;

    //No valid key then just return
    if (!userIdKey) {
      return Promise.reject({ error: { message: "Not Implemented" } });
    }

    //Obtain a connection to the 'sf' service configured
    const connection = await this.sfService.GetConnection();

    //Call the function import 'directly' specifying the url params needed
    const roleData = (await connection.get(
      `/getUsersPermissions?userIds=${userIdKey}&locale=en_GB`
    )) as ISFPermissionDataRaw;

    //Check if we are good
    const parsedData =
      ServiceXMLParser.parseFromXmlStringToJson<IPermissionXml>(
        roleData.getUsersPermissions
      );

    console.log(parsedData);

    const permissionsOut: IPermissionsOut = {
      userId: userIdKey,
      roles: [],
    };

    //Add the roles - if they are there
    if (
      parsedData["user-permission"] &&
      parsedData["user-permission"].user &&
      parsedData["user-permission"].user.role
    ) {
      //Loop each role and dissect the permissions inside
      parsedData["user-permission"].user.role.forEach((role) => {
        //Create the stub output
        let permissionTmp: IPermissionsOutRole = {
          role: role["@name"],
          roleDescription: role["@description"],
          permissions: [],
        };

        //Attach permission data to each
        if (
          role.category &&
          role.category.permissions &&
          role.category.permissions &&
          role.category.permissions["permission-unit"]
        ) {
          //Loop the permissions inside each role
          if (Array.isArray(role.category.permissions["permission-unit"])) {
            role.category.permissions["permission-unit"].forEach(
              (permissionUnit) => {

                const permissionInner = permissionUnit["on-off-permission"]["permission-item"];
                
                permissionTmp.permissions.push({
                  category: role.category["@name"],
                  description: permissionInner.message.content["#text"],
                  name: permissionInner.message["@key"],
                  permission: permissionInner["@permission-string-value"],
                  type: permissionInner["@perm-type"],
                });
              }
            );
          }
        }

        //Add the role record to output
        permissionsOut.roles.push(permissionTmp);
      });
    }

    //Return the parsed role structure
    return Promise.resolve(permissionsOut);
  }

  @OnCreate()
  public async OnCreate(@Req() req: Request): Promise<unknown> {
    return Promise.reject("Not Implemented");
  }

  @OnUpdate()
  public async OnUpdate(@Req() req: Request): Promise<unknown> {
    return Promise.reject("Not Implemented");
  }

  @OnDelete()
  public async OnDelete(@Req() req: Request): Promise<unknown> {
    return Promise.reject("Not Implemented");
  }
}
