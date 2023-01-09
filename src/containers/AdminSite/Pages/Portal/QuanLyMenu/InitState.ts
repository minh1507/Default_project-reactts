export interface IModelItem {
  id: String;
  ma: String;
  ten: String;
  url: String;
  thuTu: String;
  idMenuCha?: String;
  TrangThaiBanGhi: Boolean;
}
export interface IModelTree {
  id: String;
  ma: String;
  ten: String;
  thutu: String;
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
