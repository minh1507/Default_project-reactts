import { AppName, Guid } from "common/Enums";

export interface IModelItem {
  id: String;
  ma: String;
  ten: String;
  url: String;
  idMenuCha?: String;
  trangThaiBanGhi: Boolean;
}
export interface IModelTree {
  id: String;
  ma: String;
  ten: String;
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
