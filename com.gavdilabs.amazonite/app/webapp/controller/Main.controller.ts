import StandardListItem from "sap/m/StandardListItem";
import List from "sap/m/List";
import BaseController from "./BaseController";
import formatter from "../model/formatter";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import VBox from "sap/m/VBox";
import CustomListItem from "sap/m/CustomListItem";
import Button from "sap/m/Button";

/**
 * @namespace com.gavdilabs.ui5template.controller
 */
export default class Main extends BaseController {
  private formatter = formatter;

  public onSearchUser(oEvent): void {
    //ref relevant UI parts
    const listRoles = this.getView().byId("listRoles") as List;
    const listGroups = this.getView().byId("listGroups") as List;
    const listPermissions = this.getView().byId("listPermissions") as List;

    // Common filter for Lists
    const filter: Filter = new Filter({
      path: "userName",
      operator: FilterOperator.EQ,
      value1: oEvent.getSource().getValue(),
    });

    //Bind User details
    //userDetails.bindAggregation("items", { path: "/User", template: new Text({text:"{firstName}"}), filters: filter });

    // Filter and bind the Roles List
    const roleTemplate = new Button({ text: "{roleName}" });
    roleTemplate.addStyleClass("sapUiTinyMarginBegin");
    listRoles.bindAggregation("items", {
      path: "/Roles",
      template: new CustomListItem({
        content: [roleTemplate],
      }),
      filters: filter,
    });

    // Filter and bind the Groups List
    listGroups.bindAggregation("items", {
      path: "/Groups",
      template: new StandardListItem({
        title: "{groupName}",
      }),
      filters: filter,
    });
    // Filter and bind the Groups List
    listPermissions.bindAggregation("items", {
      path: "/Permissions",
      template: new StandardListItem({
        title: "{permissionName}",
      }),
      filters: filter,
    });
  }
}
