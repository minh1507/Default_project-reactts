import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  MoTa: String;
  GiaGiaoDong: String;
  IdMonHocCha?: String;
  TrangThaiBanGhi: Boolean;
  URL_AnhDaiDien: String;
}
export interface IState {
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ma: "",
    MoTa: "",
    GiaGiaoDong: "",
    Ten: "",
    URL_AnhDaiDien: "",
    IdMonHocCha: Guid.Empty,
    TrangThaiBanGhi: true,
  },
};
