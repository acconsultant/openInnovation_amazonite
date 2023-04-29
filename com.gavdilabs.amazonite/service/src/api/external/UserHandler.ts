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

/**
 * Interface for the XML parsing. @ attributes indicate 'tag attributes'. This prefix is specified
 * in ServiceXMLParser.ts
 */

@Handler(SanitizedEntity.User)
@Service()
export default class UserHandler {

  @Inject('sf')
    private sfService: SF;

    @OnRead()
    public async OnRead(@Req() req: Request): Promise<unknown> {
        return this.sfService.Read(SanitizedEntity.User, req);
    }

    @OnCreate()
    public async OnCreate(@Req() req: Request): Promise<unknown> {
       return this.sfService.Create(SanitizedEntity.User, req);
    }

    @OnUpdate()
    public async OnUpdate(@Req() req: Request): Promise<unknown> {
        return this.sfService.Update(SanitizedEntity.User, req);
    }

    @OnDelete()
    public async OnDelete(@Req() req: Request): Promise<unknown> {
        return this.sfService.Delete(SanitizedEntity.User, req);
    }
}
