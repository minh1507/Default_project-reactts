import { Guid } from "common/Enums";

export interface Item {
  Id: String;
  Ma: String;
  Ten: String;
}

export interface IState {
  DataItem: Item[];
}
export const InitState: IState = {
  DataItem: [],
};
