import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItem":
      return {
        ...state,
        DataItem: action.item,
      };
    case "GetTreeList":
      let categories: any = [...state.Options];
      categories.push({ Key: action.key, Options: action.items });
      return {
        ...state,
        Options: categories,
      };
    case "GetItemsVideo":
      return {
        ...state,
        ItemVideos: [...action.item],
      };
    case "GetItemsAnh":
      return {
        ...state,
        ItemAnhs: [...action.item],
      };
    case "setURL_VideoGiaoAnLyThuyet":
      return {
        ...state,
        Item: {
          ...state.Item,
          URL_Video: action.item,
        },
      };
      case "setURL_Anh":
      return {
        ...state,
        Item: {
          ...state.Item,
          URL_Anh: action.item,
        },
      };
    case "GetCategories":
      let lists: any = [...state.Options];
      lists.push({ Key: action.key, Options: action.items });
      return {
        ...state,
        Options: lists,
      };
    default:
      return state;
  }
};
