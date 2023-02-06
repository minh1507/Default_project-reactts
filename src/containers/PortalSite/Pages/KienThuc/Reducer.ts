import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemTnTucNoiBat":
      return {
        ...state,
        DataItemTinTucNoiBat: [
          ...action.items
        ]
      }
    case "GetItemTnTuc":
      return {
        ...state,
        DataItemTinTuc: [
          ...action.items
        ]
      }
    case "GetItemChuyenMuc":
      return {
        ...state,
        TreeChuyenMuc: [
          ...action.item
        ]
      }
    case "GetItem":
      return {
        ...state,
        DataItem: action.items,
      };
    default:
      return state;
  }
};
