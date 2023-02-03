import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  Ma: Number;
  Ten: String;
  IdNhomVideo: String;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    Ma: 0,
    Ten: "",
    IdNhomVideo: "",
  },
  Options: [],
};
