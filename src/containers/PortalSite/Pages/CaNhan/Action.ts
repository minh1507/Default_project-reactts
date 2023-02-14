import { IResponseMessage } from "common/Models";
import HocVienService from "services/HocVienService";

export const Actions: any = {
  GetLichSuKhoaHoc: async (dispatch: any) => {
    let res: IResponseMessage = await HocVienService.GetLichSuGiaoDich();
    dispatch({
      type: "getLichSuGiaoDich",
      items: res.Data,
    });
  },
  GetDachSachKhoaHoc: async (dispatch: any) => {
    let res: IResponseMessage = await HocVienService.GetDanhSach();
    dispatch({
      type: "getDanhSach",
      items: res.Data,
    });
  },
};
