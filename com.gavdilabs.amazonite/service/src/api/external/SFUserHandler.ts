import { Request } from "@sap/cds/apis/services";
import { Handler, OnCreate, OnDelete, OnRead, OnUpdate, Req } from "cds-routing-handlers";
import { Inject, Service } from "typedi";
import { SanitizedEntity } from "../../entities/BasicService";
import { SanitizedEntity as SFEntity } from "../../entities/sf";
import SF from "../../services/SF";


@Handler(SanitizedEntity.SFUser)
@Service()
export default class SFUserHandler {

    @Inject('sf')
    private sfService: SF;

    @OnRead()
    public async OnRead(@Req() req: Request): Promise<unknown> {
        return this.sfService.Read(SFEntity.User, req);
    }

    @OnCreate()
    public async OnCreate(@Req() req: Request): Promise<unknown> {
       return this.sfService.Create(SFEntity.User, req);
    }

    @OnUpdate()
    public async OnUpdate(@Req() req: Request): Promise<unknown> {
        return this.sfService.Update(SFEntity.User, req);
    }

    @OnDelete()
    public async OnDelete(@Req() req: Request): Promise<unknown> {
        return this.sfService.Delete(SFEntity.User, req);
    }

}
