import { AppName, Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  IdNhomTinTucCha?: String;
  TrangThaiBanGhi: Boolean;
}
export interface IModelTree {
  Id: String;
  Ma: String;
  Ten: String;
  Children: Array<IModelTree>;
}
export interface IState {
  DataItems: IModelItem[];
  DataTree: IModelTree[];
}
export const InitState: IState = {
  DataItems: [],
  DataTree: [],
};
