import { Guid } from "common/Enums";

export interface Item {
  URL_AnhDaiDien: String;
  Id: String;
  TenMonHoc: String;
}

export interface IState {
  DataItem: {
    DanhSachMonHocCon: Item[];
  };
}
export const InitState: IState = {
  DataItem: {
    DanhSachMonHocCon: [],
  },
};
