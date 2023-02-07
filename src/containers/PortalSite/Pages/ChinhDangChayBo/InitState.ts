import { Guid } from "common/Enums";

export interface IState {
  ItemsNhomSuKien: any;
  ItemsSuKien: any;
}
export const InitState: IState = {
  ItemsNhomSuKien: [],
  ItemsSuKien: []
};
