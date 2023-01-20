import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  FullName: String;
  Email: String;
  Phone: String;
  Address: String;
  IsActive: Boolean;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    FullName: "",
    Email: "",
    Phone: "",
    Address: "",
    IsActive: false,
  },
  Options: [],
};
