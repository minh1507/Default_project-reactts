import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import QuanLyGiaoVienService from "services/QuanLyGiaoVienService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await QuanLyGiaoVienService.GetItem(id);
      console.log(res);
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
        URLAnhDaiDien: "",
        NgaySinh: "",
        GioiTinh: true,
        Email: "",
        Phone: "",
        ChungChi: "",
        ThanhTich: "",
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyGiaoVienService.CreateItem(item);
    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await QuanLyGiaoVienService.UpdateItem(item);
    return res;
  },
};
