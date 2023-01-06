import { Guid } from "common/Enums";

export interface IModelItem {
  id: String;
  ma: String;
  ten: String;
  idNhomSuKienCha?: String;
  trangThaiBanGhi: Boolean;
}
export interface IState {
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    id: Guid.Empty,
    ma: "",
    ten: "",
    idNhomSuKienCha: Guid.Empty,
    trangThaiBanGhi: false,
  },
};
