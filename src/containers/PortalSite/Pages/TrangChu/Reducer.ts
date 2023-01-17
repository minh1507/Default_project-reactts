import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemBlogPortal":
      return {
        ...state,
        DataItemsBlog: action.items,
      };
    case "GetItemTinTucPortal":
      return {
        ...state,
        DataItemsTinTuc: action.items,
      };
    case "GetItemGiaoAn":
      return {
        ...state,
        DataItemsGiaoAn: action.items,
      };
    case "GetItemsKhoaHoc":
      return {
        ...state,
        DataItemsKhoaHoc: action.items,
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
