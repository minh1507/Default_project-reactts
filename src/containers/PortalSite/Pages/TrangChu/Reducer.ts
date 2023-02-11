import { InitState, IState } from "./InitState";
import data from "assets/json/TrangChu_config.json";

export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemBlogPortal":
      let dataBlog = {
        TenNhomTinTuc: data.TinTuc.TieuDe,
        DanhSachTinTuc: [...action.items]
      }
      return {
        ...state,
        DataItemsBlog: dataBlog,
      };
    case "GetItemGioiThieu":
      action.items.forEach((val: any, index: any) => {
        val.Img = action.array[index];
      });
      let dataGioiThieu: any = {
        TenNhomGioiThieu: "",
        DanhSachGioiThieu: [],
      };
      if (data.GioiThieu.TieuDe) {
        dataGioiThieu.TenNhomGioiThieu = data.GioiThieu.TieuDe;
        dataGioiThieu.DanhSachGioiThieu = action.items;
      } else {
        if (action.items.length > 0) {
          dataGioiThieu.TenNhomGioiThieu = action.items[0].TieuDeGioiThieu;
          dataGioiThieu.DanhSachGioiThieu = action.items;
        } else {
          dataGioiThieu.TenNhomGioiThieu = data.GioiThieu.TieuDe;
          dataGioiThieu.DanhSachGioiThieu = action.items;
        }
      }
      return {
        ...state,
        DataItemsGioiThieu: dataGioiThieu,
      };
    case "GetItemGiaoAn":
      let dataGiaoAn = {
        DanhSachMonHocCon: [...action.items],
        TenTieuDe: data.MonHoc.TieuDe,
      };
      return {
        ...state,
        DataItemsGiaoAn: dataGiaoAn,
      };
    case "GetItemsKhoaHoc":
      let dataKhoaHoc = action.items.map((value: any) => {
        return {
          TenMonHoc: value.length > 0 ? value[0].TenMonHoc : "",
          DanhSachKhoaHoc: [...value],
        };
      });
      return {
        ...state,
        DataItemsKhoaHoc: dataKhoaHoc,
      };
    case "GetItemSuKien":
      let dataSuKien = {
        TenTieuDe: data.SuKien.TieuDe,
        DanhSachSuKien: [...action.items]
      }
      return {
        ...state,
        DataItemsSuKien: dataSuKien,
      };
    default:
      return state;
  }
};
