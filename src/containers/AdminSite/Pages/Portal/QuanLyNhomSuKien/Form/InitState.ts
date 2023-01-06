import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  Diachi: String;
  NoiDung: String;
  GiaTien: String;
  Url_AnhDaiDien: String;
  TrangThaiBanGhi: Boolean;
}
export interface IState {
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ma: "",
    Ten: "",
    Diachi: "",
    NoiDung: "",
    GiaTien: "",
    Url_AnhDaiDien: "",
    TrangThaiBanGhi: false,
  },
};
