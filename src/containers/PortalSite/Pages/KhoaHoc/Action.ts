import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";
import QuanLyLoaiKhoaHocService from "services/QuanLyLoaiKhoahoc";

export const Actions: any = {
  GetMonHocPortal: async (ma: any, limit: any, dispatch: any) => {
    let res: IResponseMessage = await MonHocService.getMonHocPortal(ma, limit);
    dispatch({
      type: "GetItem",
      items: res.Data,
    });
  },
  GetHoatDongPortal: async (dispatch: any) => {
    let res: IResponseMessage = await QuanLyLoaiKhoaHocService.GetHoatDong();
    dispatch({
      type: "GetHoatDong",
      items: res.Data,
    });
  },
};
