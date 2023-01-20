import { Guid } from "common/Enums";
export interface IState {
  DataDetail: {
    Id: String;
    TieuDe: String;
    MoTa: String;
    URL_AnhDaiDien: String;
    TinNoiBat: String;
    LuotXem: String;
    TacGia: String;
    NgayXuatBan: string;
    NoiDung: String;
  };
}
export const InitState: IState = {
  DataDetail: {
    Id: Guid.Empty,
    TieuDe: "",
    MoTa: "",
    URL_AnhDaiDien: "",
    TinNoiBat: "",
    LuotXem: "",
    TacGia: "",
    NgayXuatBan: "",
    NoiDung: "",
  },
};
