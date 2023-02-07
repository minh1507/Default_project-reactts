import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItemKhoaHoc":
      let datas = action.items.slice(action.start, action.end);
      return {
        ...state,
        DsKhoaHoc: [...datas],
        Count: action.count,
        DataAllItem: [...action.items],
      };
    case "GetItemKhoaHocChange":
      let newData = state.DataAllItem.slice(action.start, action.end);
      return {
        ...state,
        DsKhoaHoc: [...newData],
      };
    case "GetItemMonHoc":
      return {
        ...state,
        TreeMonHoc: [...action.item],
      };
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
    case "GetItemKhoaHocSearch":
      if (action.search) {
        let searchData = state.DataAllItem.filter((x: any) => {
          return x.TieuDe.toLowerCase().includes(action.search.toLowerCase());
        });

        let newSearchData = searchData.slice(0, 10);

        return {
          ...state,
          DsKhoaHoc: [...newSearchData],
          Count: searchData.length,
        };
      } else {
        let dataNew = state.DataAllItem.slice(0, 10);
        return {
          ...state,
          DsKhoaHoc: [...dataNew],
          Count: state.DataAllItem.length,
        };
      }

    default:
      return state;
  }
};
