import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetGioHang":
      let totalPre = 0
      let totalNext = 0
      if(action.items.length > 0)
      {
        totalPre = action.items.reduce((pre:any, val: any) => {
          return pre + val.HocPhiGiamGia 
        }, 0)
        totalNext = action.items.reduce((pre:any, val: any) => {
          return pre + val.HocPhiGoc 
        }, 0)
      }
      return {
        ...state,
        DataItem: action.items,
        Count: action.items.length,
        Totalpre: totalPre,
        Totalnext: totalNext
      }
    default:
      return state;
  }
};
