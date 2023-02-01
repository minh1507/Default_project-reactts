import { Guid } from "common/Enums";

export interface Item {
  URL_AnhDaiDien: String;
  Id: String;
  TenMonHoc: String;
}

export interface HoatDong {
  Id: String;
  TieuDe: String;
}

export interface IState {
  DataItem: {
    DanhSachMonHocCon: Item[];
  };
  DataHoatDong: HoatDong[];
}
export const InitState: IState = {
  DataItem: {
    DanhSachMonHocCon: [],
  },
  DataHoatDong: [],
};
