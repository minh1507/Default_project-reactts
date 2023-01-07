export interface IModelItem {
  id: String;
  tieuDe: String;
  moTa: String;
  noiDung: String;
  tacGia: String;
  urL_AnhDaiDien: String;
  ngayXuatBan: Date;
  tinNoiBat: Boolean;
  tinMoi: Boolean;
  luotXem: Number;
  idNhomTinTuc: String;
  trangThaiBanGhi: Boolean;
}
export interface IState {
  DataItems: IModelItem[];
}
export const InitState: IState = {
  DataItems: [],
};

export interface items {
  Id: String;
  TieuDe: String;
  MoTa: String;
  NoiDung: String;
  TacGia: String;
  URL_AnhDaiDien: String;
  NgayXuatBan: Date;
  TinNoiBat: Boolean;
  TinMoi: Boolean;
  LuotXem: Number;
  IdNhomTinTuc: String;
  TrangThaiBanGhi: Boolean;
}
