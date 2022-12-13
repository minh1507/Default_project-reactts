
import { InitState, IState }  from "./InitState"
export const Reducer = (state:IState = InitState, action:any) =>
{  
  switch (action.type) { 
    case "GetLopBanDo":
      let optionsLopBanDo = [...state.Options];   
      optionsLopBanDo.push({ Key : "PermFeature", Options: action.items})                    
      return {
        ...state,
        Options: optionsLopBanDo
      }
    case "GetDsQuyTrinh":
      let optionsDsQuyTrinh = [...state.Options];   
      optionsDsQuyTrinh.push({ Key : "PermWorkFlow", Options: action.items})                    
      return {
        ...state,
        Options: optionsDsQuyTrinh
      } 
    case 'GetItems':
      return {
        ...state,
        DataItems: action.items
      }
    case 'GetTree':        
      let nodeTree = state.DataTree;      
      nodeTree[0].Children = action.tree;        
      return {
        ...state,
        DataTree: nodeTree
      }      
    default:
      return state;
  }
}