import { Guid } from "common/Enums";

export interface Item {
  Id: String;
  Ma: String;
  Ten: String;
}

export interface IState {
  DataItemTinTucNoiBat: any;
  DataItemTinTuc: any;
  DataItem: Item[];
  TreeChuyenMuc: any;
}
export const InitState: IState = {
  DataItemTinTucNoiBat: [],
  DataItemTinTuc: [],
  DataItem: [],
  TreeChuyenMuc: []
};
