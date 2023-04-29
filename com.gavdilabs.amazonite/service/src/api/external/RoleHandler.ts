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
import {IRolesOutRoot} from "common";

/**
 * Interface for the XML parsing. @ attributes indicate 'tag attributes'. This prefix is specified
 * in ServiceXMLParser.ts
 */

interface IRoleXml {
  "user-role-granting": {
    user: {
      "@id": string;
      role:[
            {
              "@id": string;
              "@name": string;
              rule: {
                "@id": string;
                "@last-modified-by": string;
                "@last-modified-date": string;
                "access-group": {
                  "@created-by": string;
                  "@created-date": string;
                  "@id": string;
                  "@last-modified-by": string;
                  "@last-modified-date": string;
                  "@member-count": string;
                  "include-people-pool": string;
                  "@name": string;
                };
                "target-group": {
                  "@created-by": string;
                  "@created-date": string;
                  "@id": string;
                  "@last-modified-by": string;
                  "@last-modified-date": string;
                  "@member-count": string;
                  "include-people-pool": string;
                  "@name": string;
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
interface ISFRoleDataRaw {
  getUserRolesReport: string;
}

@Handler(SanitizedEntity.Roles)
@Service()
export default class RoleHandler {
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
      `/getUserRolesReport?userIds=${userIdKey}`
    )) as ISFRoleDataRaw;

    //Check if we are good
    const parsedData = ServiceXMLParser.parseFromXmlStringToJson<IRoleXml>(
      roleData.getUserRolesReport
    );

    console.log(parsedData);

    const rolesOut: IRolesOutRoot = {
      userId: userIdKey,
      roles: [],
    };

    //Add the roles - if they are there
    if (
      parsedData["user-role-granting"] &&
      parsedData["user-role-granting"].user &&
      parsedData["user-role-granting"].user.role
    ) {
      parsedData["user-role-granting"].user.role.forEach((role) => {
        rolesOut.roles.push({
          roleName: role["@name"],
          roleNameAccess: role.rule["access-group"]
            ? role.rule["access-group"]["@name"]
            : "",
          roleNameTarget: role.rule["target-group"]
            ? role.rule["target-group"]["@name"]
            : "",
        });
      });
    }

    //Return the parsed role structure
    return Promise.resolve(rolesOut);
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
