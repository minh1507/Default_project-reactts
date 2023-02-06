import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import KhoaHocService from "services/KhoaHocService";
import MonHocService from "services/MonHocService";
import QuanLyLoaiKhoahocService from "services/QuanLyLoaiKhoahoc";

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
        IdMonHoc: Guid.Empty,
        IdLoaiKhoaHoc: Guid.Empty,
        URL_AnhDaiDien: "",
        URL_VideoDaiDien: "",
        TieuDe: "",
        TrangThai: true,
        TyLeDanhGia: 0,
        HocPhiGoc: 0,
        HocPhiGiamGia: 0,
        ThoiHan: 0,
        ThoiHanTruyCapMienPhi: 0,
        GioiThieu: "",
        NoiDung: "",
        TrangThaiBanGhi: true,
        CreatedDateTime: new Date()
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
    let res: IResponseMessage = await QuanLyLoaiKhoahocService.GetList();
    if (res && res.Success) {
      dispatch({
        type: "GetCategories",
        key: key,
        items: res.Data.Items,
      });
    }
    return res;
  },
};
