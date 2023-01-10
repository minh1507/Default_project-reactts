export interface IModelItem {
  Id: String;
  Ma: String;
  Ten: String;
  URLAnhDaiDien: String;
  NgaySinh: String;
  GioiTinh: Boolean;
  Email: String;
  Phone: String;
  ChungChi: String;
  ThanhTich: String;
}
export interface IState {
  DataItems: IModelItem[];
}
export const InitState: IState = {
  DataItems: [],
};
