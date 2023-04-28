import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import * as Device from "sap/ui/Device";

/**
 * Interface created due to missing equiv from SAP side
 */
export interface IGetByKeyParams {
  $expand?: string | object;
  $select?: string | string[];
  $$canonicalPath?: boolean;
  $$groupId?: string;
  $$inheritExpandSelect?: boolean;
  $$ownRequest?: boolean;
  $$patchWithoutSideEffects?: boolean;
  $$updateGroupId?: string;
}

export default {
  createDeviceModel: () => {
    const oModel = new JSONModel(Device);
    oModel.setDefaultBindingMode(BindingMode.OneWay);
    return oModel;
  },
};
