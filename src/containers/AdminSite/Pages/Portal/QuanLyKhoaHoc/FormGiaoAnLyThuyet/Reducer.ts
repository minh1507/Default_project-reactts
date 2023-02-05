import { InitState, IState } from "./InitState";
export const Reducer = (state: IState = InitState, action: any) => {
  switch (action.type) {
    case "GetTree":
      let nodeTree = state.Tree;
      nodeTree[0].Children = action.item;
      return {
        ...state,
        Tree : nodeTree
      };      
    case "GetItem":
      return {
        ...state,
        Item : {
          ...action.item
        }
      };
    default:
      return state;
  }
};
