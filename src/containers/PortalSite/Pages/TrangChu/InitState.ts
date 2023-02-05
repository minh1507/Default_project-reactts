import { Guid } from "common/Enums";
export interface danhSachTintuc {
  Id: String;
  TieuDe: String;
  MoTa: String;
  URL_AnhDaiDien: String;
  Img: String;
}

export interface IModelGen {
  DanhSachKhoaHoc: IModelGenCon[];
  IdMonHoc: String;
  TenMonHoc: String;
}

export interface IModelGenCon {
  Id: String;
  HocPhiGiamGia: number;
  HocPhiGoc: number;
  IdMonHoc: String;
  TieuDe: String;
  URL_AnhDaiDien: String;
  ThoiGianHoc: String;
}

export interface IModelMonHocCon {
  Id: String;
  TenMonHoc: String;
  MoTa: String;
  GiaGiaoDongTu: Number;
  GiaGiaoDongDen: Number;
  URL_AnhDaiDien: String;
  IdMonHocCha: String;
}

export interface IModelMonHoc {
  Id: String;
  TenMonHoc: String;
  MoTa: String;
  GiaGiaoDong: String;
  URL_AnhDaiDien: String;
  IdMonHocCha: String;
  DanhSachMonHocCon: [];
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
  DataItemsTinTuc: {
    TenNhomTinTuc: string;
    DanhSachTinTuc: danhSachTintuc[];
  };
  DataItemsBlog: {
    TenNhomTinTuc: string;
    DanhSachTinTuc: danhSachTintuc[];
  };
  DataItemsGiaoAn: {
    Id: String;
    TenMonHoc: String;
    MoTa: String;
    GiaGiaoDong: String;
    URL_AnhDaiDien: String;
    DanhSachMonHocCon: IModelMonHocCon[];
  };
  DataItemsKhoaHoc: IModelGen[];
  DataItemsSuKien: {
    TenNhomSuKien: String;
    DanhSachSuKien: danhSachSuKien[];
  };
}
export const InitState: IState = {
  DataItemsTinTuc: {
    TenNhomTinTuc: "",
    DanhSachTinTuc: [],
  },
  DataItemsBlog: {
    TenNhomTinTuc: "",
    DanhSachTinTuc: [],
  },
  DataItemsGiaoAn: {
    Id: "",
    TenMonHoc: "",
    MoTa: "",
    GiaGiaoDong: "",
    URL_AnhDaiDien: "",
    DanhSachMonHocCon: [],
  },
  DataItemsKhoaHoc: [],
  DataItemsSuKien: {
    TenNhomSuKien: "",
    DanhSachSuKien: [],
  },
};
