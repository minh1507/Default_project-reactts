import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  Ten: String;
  NoiDung: String;
  DiaChi: String;
  URL_AnhDaiDien: String;
  ThoiGian: Date;
  GiaTien: Number;
  IdNhomSuKien: String;
  TrangThaiBanGhi: Boolean;
  TrangThai: Boolean;
  MoTa: String;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ten: "",
    MoTa: "",
    NoiDung: "",
    DiaChi: "",
    URL_AnhDaiDien: "",
    ThoiGian: new Date(),
    GiaTien: 0,
    IdNhomSuKien: "",
    TrangThaiBanGhi: true,
    TrangThai: true,
  },
  Options: [],
};
