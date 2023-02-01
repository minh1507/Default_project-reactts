import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItem":
      let data = action.items;
      action.items.DanhSachMonHocCon.forEach((val: any) => {
        val.check = true;
      });

      return {
        ...state,
        DataItem: action.items,
      };
    case "GetHoatDong":
      return {
        ...state,
        DataHoatDong: action.items,
      };
    default:
      return state;
  }
};
