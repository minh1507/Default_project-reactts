import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  Mota: String;
  GiaGiaoDong: String;
  IdMonHocCha?: String;
  TrangThaiBanGhi: Boolean;
}
export interface IState {
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ma: "",
    Mota: "",
    GiaGiaoDong: "",
    Ten: "",
    IdMonHocCha: Guid.Empty,
    TrangThaiBanGhi: true,
  },
};
