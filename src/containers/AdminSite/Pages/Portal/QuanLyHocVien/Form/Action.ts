import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import UserService from "services/UserService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await UserService.GetItem(id);
      if (res && res.Success) {
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        Id: Guid.Empty,
        FullName: "",
        Email: "",
        Phone: "",
        Address: "",
        IsActive: false,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  Active: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await UserService.Active(id);
    return res;
  },
  UnActive: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await UserService.UnActive(id);
    return res;
  },
};
