import { Guid } from "common/Enums";
export interface IState {
  DataDetail: {
    Id: String;
    TieuDe: String;
    ThoiGianHoc: String;
    MoTa: String;
    NoiDung: String;
    URL_AnhDaiDien: String;
    GiaTien: String;
    HocPhiGoc: string;
    HocPhiGiamGia: String;
    TrangThai: Boolean;
  };
}
export const InitState: IState = {
  DataDetail: {
    Id: Guid.Empty,
    TieuDe: "",
    ThoiGianHoc: "",
    MoTa: "",
    NoiDung: "",
    URL_AnhDaiDien: "",
    GiaTien: "",
    HocPhiGoc: "",
    HocPhiGiamGia: "",
    TrangThai: false,
  },
};
