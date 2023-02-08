import { Guid } from "common/Enums";

export interface IState {
  ItemsNhomSuKien: any;
  ItemsSuKien: any;
  ItemsSuKienCopy: any;
  Count: number
}
export const InitState: IState = {
  ItemsNhomSuKien: [],
  ItemsSuKien: [],
  ItemsSuKienCopy: [],
  Count: 0
};
