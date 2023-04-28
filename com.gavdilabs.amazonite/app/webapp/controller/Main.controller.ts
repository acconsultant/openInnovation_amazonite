import BaseController from "./BaseController";
import formatter from "../model/formatter";
import { IRolesOutRoot } from "common";
import Event from "sap/ui/base/Event";
import Input from "sap/m/Input";
import MessageBox from "sap/m/MessageBox";
import { ModelNames } from "../model/models";
import JSONModel from "sap/ui/model/json/JSONModel";
import Message from "sap/ui/core/Message";

/**
 * @namespace com.gavdilabs.ui5template.controller
 */
export default class Main extends BaseController {
  private formatter = formatter;

  public async onSearchUser(event: Event): Promise<void> {
    //Gotta love TS & SAPUI5 - we need to cast to allow getSource
    const userId = (event.getSource() as Input).getValue();

    //Same username? => return
    if (
      this.getModel(ModelNames.USER_DETAILS) &&
      userId ===
        (this.getModel(ModelNames.USER_DETAILS) as JSONModel).getProperty(
          "/userId"
        )
    ) {
      return;
    }

    //Set busy state
    this.getOwnerComponent().setIsBusy(true);

    //First user details then fill the roles
    this.fillUserDetails(userId)
      .then(() => {
        this.fillUserRoles(userId);
        //Set busy state
        this.getOwnerComponent().setIsBusy(false);
      })
      .catch((errMessage: string) => {
        MessageBox.error(errMessage);
        //Set busy state
        this.getOwnerComponent().setIsBusy(false);
      });
  }
}
