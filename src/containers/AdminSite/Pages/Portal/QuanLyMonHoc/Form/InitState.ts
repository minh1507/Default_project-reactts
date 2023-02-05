import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  MoTa: String;
  GiaGiaoDongTu: Number;
  GiaGiaoDongDen: Number;
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
    Ten: "",
    MoTa: "",
    GiaGiaoDongTu: 0,
    GiaGiaoDongDen: 0,
    URL_AnhDaiDien: "",
    IdMonHocCha: Guid.Empty,
    TrangThaiBanGhi: true,
  },
};
