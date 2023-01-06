import { Guid } from "common/Enums";

export interface IModelItem {
  id: String;
  ma: String;
  ten: String;
  idNhomTinTucCha?: String;
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
    idNhomTinTucCha: Guid.Empty,
    trangThaiBanGhi: false,
  },
};
