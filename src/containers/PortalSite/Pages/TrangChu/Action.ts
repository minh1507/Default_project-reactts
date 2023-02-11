import { IResponseMessage } from "common/Models";
import MonHocService from "services/MonHocService";
import QuanLySuKien from "services/SuKienService";
import QuanLyNhomTinTuc from "services/QuanLyNhomTinTuc";
import CauHinhGiaoDienService from "services/CauHinhGiaoDienService";
import data from "assets/json/TrangChu_config.json";

export const Actions: any = {
  GetItemGiaoan: async (dispatch: any) => {
    let res: IResponseMessage = await CauHinhGiaoDienService.GetCauHinhMonHoc(
      data.MonHoc.DsMaMonHoc
    );
    dispatch({
      type: "GetItemGiaoAn",
      items: res.Data,
    });
  },
  GetItemGioiThieu: async (arr: any, dispatch: any) => {
    let res: IResponseMessage =
      await CauHinhGiaoDienService.GetCauHinhGioiThieu(
        data.GioiThieu.MaNhomTinTuc,
        data.GioiThieu.SoLuong
      );
    let tieuDe = "";
    if (data.GioiThieu.TieuDe) {
      tieuDe = data.GioiThieu.TieuDe;
    }
    if (res && res.Success) {
      dispatch({
        type: "GetItemGioiThieu",
        items: res.Data,
        array: arr,
        tieuDe: tieuDe,
      });
    }
  },
  GetItemBlog: async ( dispatch: any) => {
    let res: IResponseMessage = await CauHinhGiaoDienService.GetCauHinhBlog(data.TinTuc.MaNhomTinTuc,data.TinTuc.SoLuong);

    if (res && res.Success) {
      dispatch({
        type: "GetItemBlogPortal",
        items: res.Data,
      });
    }
  },
  GetItemKhoaHoc: async (dispatch: any) => {
    let res: IResponseMessage = await CauHinhGiaoDienService.GetCauHinhKhoaHoc(
      data.KhoaHoc
    );

    dispatch({
      type: "GetItemsKhoaHoc",
      items: res.Data,
    });
  },
  GetSuKien: async (dispatch: any) => {
    let suKien = {
      TinhTrang: data.SuKien.TinhTrang,
      SoLuong: data.SuKien.SoLuong,
    };
    let res: IResponseMessage = await CauHinhGiaoDienService.GetCauHinhSuKien(suKien);
    dispatch({
      type: "GetItemSuKien",
      items: res.Data,
    });
  },
};
