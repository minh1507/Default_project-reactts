import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  TieuDe: String;
  MoTa: String;
  NoiDung: String;
  TacGia: String;
  URL_AnhDaiDien: String;
  NgayXuatBan: Date;
  TinNoiBat: Boolean;
  TinMoi: Boolean;
  LuotXem: Number;
  IdNhomTinTuc: String;
  TrangThaiBanGhi: Boolean;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    TieuDe: "",
    MoTa: "",
    NoiDung: "",
    TacGia: "",
    URL_AnhDaiDien: "",
    NgayXuatBan: new Date(),
    TinNoiBat: false,
    TinMoi: false,
    LuotXem: 0,
    IdNhomTinTuc: "",
    TrangThaiBanGhi: true,
  },
  Options: [],
};
