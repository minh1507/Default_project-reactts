import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import KhoaHocService from "services/KhoaHocService";
import MonHocService from "services/MonHocService";
import QuanLyGiaoVienService from "services/QuanLyGiaoVienService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await KhoaHocService.GetItem(id);
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
        IdGiaoVien: "",
        URL_AnhDaiDien: "",
        NgayXuatBan: new Date(),
        HocPhiGoc: 0,
        HocPhiGiamGia: 0,
        IdMonHoc: "",
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
    let res: IResponseMessage = await KhoaHocService.CreateItem(item);

    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.UpdateItem(item);
    return res;
  },
  GetTreeList: async (key: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.GetTreeList();
    if (res && res.Success) {
      dispatch({
        type: "GetTreeList",
        key: key,
        items: res.Data,
      });
    }
    return res;
  },
  GetCategories: async (key: any, dispatch: any) => {
    let res: IResponseMessage = await QuanLyGiaoVienService.GetCategories();
    if (res && res.Success) {
      dispatch({
        type: "GetCategories",
        key: key,
        items: res.Data,
      });
    }
    return res;
  },
};
