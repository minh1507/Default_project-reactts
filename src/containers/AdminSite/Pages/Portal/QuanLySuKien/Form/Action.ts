import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import SuKienService from "services/SuKienService";
import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await SuKienService.GetItem(id);
      if (res && res.Success) {
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        Id: Guid.Empty,
        Ten: "",
        MoTa: "",
        NoiDung: "",
        DiaChi: "",
        URL_AnhDaiDien: "",
        ThoiGian: new Date(),
        GiaTien: 0,
        IdNhomSuKien: "",
        TrangThaiBanGhi: true,
        TrangThai: true,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await SuKienService.CreateItem(item);

    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await SuKienService.UpdateItem(item);
    return res;
  },
  GetTreeList: async (key: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.GetTreeList();
    if (res && res.Success) {
      dispatch({
        type: "GetTreeList",
        key: key,
        items: res.Data,
      });
    }
    return res;
  },
};
