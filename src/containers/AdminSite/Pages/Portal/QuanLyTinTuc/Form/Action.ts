import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import TinTucService from "services/TinTucService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await TinTucService.GetItem(id);
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
        TieuDe: "",
        MoTa: "",
        NoiDung: "",
        TacGia: "",
        URL_AnhDaiDien: "",
        NgayXuatBan: new Date(),
        TinNoiBat: false,
        TinMoi: true,
        LuotXem: 0,
        IdNhomTinTuc: "",
        TrangThaiBanGhi: true,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await TinTucService.CreateItem(item);

    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await TinTucService.UpdateItem(item);
    return res;
  },
};
