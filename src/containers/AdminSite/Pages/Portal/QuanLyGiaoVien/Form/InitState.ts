import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

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
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ma: "",
    Ten: "",
    URLAnhDaiDien: "",
    NgaySinh: "",
    GioiTinh: true,
    Email: "",
    Phone: "",
    ChungChi: "",
    ThanhTich: "",
  },
};
