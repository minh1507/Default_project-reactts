
import { InitState, IState }  from "./InitState"
export const Reducer = (state:IState = InitState, action:any) =>
{  
  switch (action.type) {    
    case 'ChangeAuthentication':
      return {
        ...state,
        IsAuthenticated: action.isAuthenticated
      }            
    default:
      return state;
  }
}