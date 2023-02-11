
import { InitState, IState }  from "./InitState"
export const Reducer = (state:IState = InitState, action:any) =>
{  
  switch (action.type) {    
    case "AddToCard":
      return {
        ...state,
        CartQuantity: action.item
      }   
    default:
      return state;
  }
}