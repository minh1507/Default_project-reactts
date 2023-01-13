import { Guid } from "common/Enums";

export interface IModelItem {
  Id: String;
  TenNhomTinTuc: String;
  TieuDe: String;
  MoTa: String;
  URL_AnhDaiDien: String;
  Small: String;
}

export interface IModelGen {
  Id: String;
  TenMonHoc: String;
  MoTa: String;
  GiaGiaoDong: String;
  IdMonHocCha: String;
}
export interface IState {
  DataItems: IModelItem[];
  DataItemsGiaoAn: IModelGen[];
  DataItemsBoiDapChay: IModelGen[];
  DataItemsTreEm: IModelGen[];
}
export const InitState: IState = {
  DataItems: [],
  DataItemsGiaoAn: [],
  DataItemsBoiDapChay: [],
  DataItemsTreEm: [],
};
