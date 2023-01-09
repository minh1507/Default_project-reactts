import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
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
    Ten: "",
    IdMonHocCha: Guid.Empty,
    TrangThaiBanGhi: true,
  },
};
