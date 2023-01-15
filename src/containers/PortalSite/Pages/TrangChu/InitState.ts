import { Guid } from "common/Enums";

export interface IModelItem {
  TenNhomTinTuc: string;
  DanhSachTinTuc: danhSachTintuc[];
}

export interface danhSachTintuc {
  Id: String;
  TenNhomTinTuc: String;
  TieuDe: String;
  MoTa: String;
  URL_AnhDaiDien: String;
  Small: String;
  Logo: String;
}

export interface IModelGen {
  Id: String;
  TenMonHoc: String;
  MoTa: String;
  GiaGiaoDong: String;
  IdMonHocCha: String;
}

export interface IModelSuKien {
  TenNhomSuKien: String;
  DanhSachSuKien: danhSachSuKien[];
}

export interface danhSachSuKien {
  IdSuKien: String;
  TenSuKien: String;
  DiaChi: String;
  MoTa: String;
  GiaTien: String;
  URL_AnhDaiDien: String;
  Date: String;
  Time: String;
  Detech: String;
  TrangThai: Number;
}

export interface IState {
  DataItems: {
    TenNhomTinTuc: string;
    DanhSachTinTuc: danhSachTintuc[];
  };
  DataItemsGiaoAn: IModelGen[];
  DataItemsBoiDapChay: IModelGen[];
  DataItemsTreEm: IModelGen[];
  DataItemsSuKien: {
    TenNhomSuKien: String;
    DanhSachSuKien: danhSachSuKien[];
  };
}
export const InitState: IState = {
  DataItems: {
    TenNhomTinTuc: "",
    DanhSachTinTuc: [],
  },
  DataItemsGiaoAn: [],
  DataItemsBoiDapChay: [],
  DataItemsTreEm: [],
  DataItemsSuKien: {
    TenNhomSuKien: "",
    DanhSachSuKien: [],
  },
};
