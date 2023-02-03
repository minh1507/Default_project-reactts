import { AppName, Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  IdNhomSuKienCha?: String;
  TrangThaiBanGhi: Boolean;
}
export interface IModelTree {
  Id: String;
  Code: String;
  Name: String;
  Children: Array<IModelTree>;
}
export interface IState {
  DataItems: IModelItem[];
  DataTree: IModelTree[];
}
export const InitState: IState = {
  DataItems: [],
  DataTree: [
    {
      Id: Guid.Empty,
      Code: "CayNhomSuKien",
      Name: "Cây nhóm sự kiện",
      Children: [],
    },
  ],
};
