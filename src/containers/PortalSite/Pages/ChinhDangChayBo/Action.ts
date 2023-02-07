import { IResponseMessage } from "common/Models";
import QuanLyNhomSuKien from "services/QuanLyNhomSuKien";
import SuKienService from "services/SuKienService";

export const Actions: any = {
  GetLoaiKhoaHocHoatDongPortal: async (dispatch: any) => {
    let res: IResponseMessage = await QuanLyNhomSuKien.GetHoatDong();
    dispatch({
      type: "GetHoatDong",
      items: res.Data,
    });
  },
  getSuKienPortal: async (idNhomSuKien:any, dispatch: any) => {
    let res: IResponseMessage = await SuKienService.getSuKienPortal(idNhomSuKien);
    dispatch({
      type: "getSuKienPortal",
      items: res.Data,
    });
  },
};
