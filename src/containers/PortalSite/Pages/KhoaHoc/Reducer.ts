import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemKhoaHoc":
      return {
        ...state,
        DsKhoaHoc: [
          ...action.items
        ]
      }
    case "GetItemMonHoc":
      return {
        ...state,
        TreeMonHoc: [
          ...action.item
        ]
      }
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
