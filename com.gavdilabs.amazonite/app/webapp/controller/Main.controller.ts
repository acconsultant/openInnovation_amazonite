import BaseController from "./BaseController";
import formatter from "../model/formatter";
import { IRolesOutRoot } from "common";
import Event from "sap/ui/base/Event";
import Input from "sap/m/Input";

/**
 * @namespace com.gavdilabs.ui5template.controller
 */
export default class Main extends BaseController {
  private formatter = formatter;

  public async onSearchUser(event:Event): Promise<void> {
    //Gotta love TS & SAPUI5 - we need to cast to allow getSource
    const userId = (event.getSource() as Input).getValue();

    //Get User details
    let userData = await this.getByKey2JSONModel(
      `/User('${userId}')`,
      "UserDetails",
      undefined
    );

    //Get user roles
    await this.getByKey2JSONModel<IRolesOutRoot>(
      `/Roles('${userId}')`,
      "Roles",
      undefined
    );
  }
}
