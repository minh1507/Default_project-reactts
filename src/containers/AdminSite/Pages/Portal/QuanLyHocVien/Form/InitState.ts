import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  Ten: String;
  GioiTinh: String;
  Sdt: String;
  Email: String;
  NoiDung: String;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ten: "",
    GioiTinh: "",
    Sdt: "",
    Email: "",
    NoiDung: "",
  },
  Options: [],
};
