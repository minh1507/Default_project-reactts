import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemPortal":
      return {
        ...state,
        DataItems: action.items,
      };
    case "GetItemGiaoAn":
      return {
        ...state,
        DataItemsGiaoAn: action.items,
      };
    case "GetItemBoiDapChay":
      return {
        ...state,
        DataItemsBoiDapChay: action.items,
      };
    case "GetItemTreEm":
      return {
        ...state,
        DataItemsTreEm: action.items,
      };
    case "GetItemSuKien":
      return {
        ...state,
        DataItemsSuKien: action.items,
      };
    default:
      return state;
  }
};
