export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  Diachi: String;
  NoiDung: String;
  GiaTien: String;
  Url_AnhDaiDien: String;
  TrangThaiBanGhi: Boolean;
}
export interface IState {
  DataItems: IModelItem[];
}
export const InitState: IState = {
  DataItems: [],
};
