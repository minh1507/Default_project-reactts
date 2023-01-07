export interface IModelItem {
  id: String;
  tieuDe: String;
  moTa: String;
  noiDung: String;
  giaoVien: String;
  urL_AnhDaiDien: String;
  ngayXuatBan: Date;
  hocPhiGoc: Number;
  hocPhiGiamGia: Number;
  thoiGian: Number;
  idMonHoc: String;
  trangThaiBanGhi: Boolean;
  trangThai: Boolean;
}
export interface IState {
  DataItems: IModelItem[];
}
export const InitState: IState = {
  DataItems: [],
};
