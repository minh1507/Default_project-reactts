import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetItem":
      let data = action.items;
      action.items.DanhSachMonHocCon.forEach((val: any) => {
        val.check = true;
      });
      console.log(data);
      return {
        ...state,
        DataItem: action.items,
      };
    default:
      return state;
  }
};
