import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "getDetail":
      return {
        ...state,
        DataDetail: action.items,
      };
    default:
      return state;
  }
};
