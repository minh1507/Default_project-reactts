import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await QuanLyNhomTinTuc.GetItem(id);
      if (res && res.Success) {
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        Id: Guid.Empty,
        Ma: "",
        Ten: "",
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomTinTuc.UpdateItem(item);
    return res;
  },
  CheckDuplicateAttributes: async (id: any, code: any, dispatch: any) => {
    // let res: IResponseMessage = await RoleService.CheckDuplicateAttributes(
    //   id,
    //   code
    // );
    // return res;
  },
  CheckDuplicateAttributesCreateNew: async (code: any, dispatch: any) => {
    // let res: IResponseMessage =
    //   await MonHocService.CheckDuplicateAttributesCreateNew(code);
    // return res;
  },
};
