import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import QuanLyAnhService from "services/QuanLyAnhService";
import QuanLyNhomAnhService from "services/QuanLyNhomAnhService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await QuanLyAnhService.GetItem(id);

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
        URL_Anh: "",
        IdNhomAnh: "",
        TrangThaiBanGhi: true,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyAnhService.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyAnhService.UpdateItem(item);
    return res;
  },
  GetTreeList: async (key: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomAnhService.GetTreeList();

    if (res && res.Success) {
      dispatch({
        type: "GetTreeList",
        key: key,
        items: res.Data.Items,
      });
    }
    return res;
  },
};
