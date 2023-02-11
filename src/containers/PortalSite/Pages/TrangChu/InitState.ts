import { Guid } from "common/Enums";
export interface danhSachTintuc {
  Id: String;
  TieuDe: String;
  MoTa: String;
  URL_AnhDaiDien: String;
  Img: String;
  TieuDeGioiThieu: String;
}

export interface IModelGen {
  TenMonHoc: string,
  DanhSachKhoaHoc: []
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
  MoTa: String;
  GiaGiaoDongTu: Number;
  GiaGiaoDongDen: Number;
  URL_AnhDaiDien: String;
  TieuDe:String
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
  DataItemsGioiThieu: {
    TenNhomGioiThieu: string;
    DanhSachGioiThieu: danhSachTintuc[];
  };
  DataItemsBlog: {
    TenNhomTinTuc: string;
    DanhSachTinTuc: danhSachTintuc[];
  };
  DataItemsGiaoAn: {
    TenTieuDe: string;
    DanhSachMonHocCon: IModelMonHocCon[];
  };
  DataItemsKhoaHoc: IModelGen[];
  DataItemsSuKien: {
    DanhSachSuKien: [],
    TenTieuDe: string
  };
}
export const InitState: IState = {
  DataItemsGioiThieu: {
    TenNhomGioiThieu: "",
    DanhSachGioiThieu: [],
  },
  DataItemsBlog: {
    TenNhomTinTuc: "",
    DanhSachTinTuc: [],
  },
  DataItemsGiaoAn: {
    TenTieuDe:'',
    DanhSachMonHocCon: [],
  },
  DataItemsKhoaHoc: [],
  DataItemsSuKien: {
    DanhSachSuKien: [],
    TenTieuDe: ""
  }
};
