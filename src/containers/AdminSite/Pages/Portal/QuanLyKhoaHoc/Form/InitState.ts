import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  IdMonHoc: String;
  IdGiaoVien: String;
  URL_AnhDaiDien: String;
  URL_VideoDaiDien: String;
  TieuDe: String;
  TrangThai: Boolean;
  TyLeDanhGia: Number;
  HocPhiGoc: Number;
  HocPhiGiamGia: Number;
  ThoiHan: Number;
  ThoiHanTruyCapMienPhi: Number;
  GioiThieu: String;
  NoiDung: String;
  TrangThaiBanGhi: Boolean;
  CreatedDateTime: Date;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    IdMonHoc: Guid.Empty,
    IdGiaoVien: Guid.Empty,
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
  },
  Options: [],
};
