import { Guid } from "common/Enums";
import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "getSuKienPortal": {
      return {
        ...state,
        ItemsSuKien : action.items
      };
    }
    case "GetHoatDong":
      var tempItemsNhomSuKien = [{ Id: Guid.Empty, Ma: "TatCa", Ten: "Tất cả"}]
      tempItemsNhomSuKien.push.apply(tempItemsNhomSuKien, action.items);
      return {
        ...state,
        ItemsNhomSuKien : tempItemsNhomSuKien
      };
    default:
      return state;
  }
};
