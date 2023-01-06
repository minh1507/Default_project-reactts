import CDynamicForm from 'components/CDynamicForm';
import CNotification from 'components/CNotification';
import { IResponseMessage } from 'common/Models';
import { Message } from 'common/Enums';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import suKienFormInputJson from './FormInput.json';
import { Tree } from 'common/Tree';
interface Props {
  Id: string,
  TreeId?: string,
  TreeData?: any,
  ReloadTableItems?: any
}

const SuKienForm = (props: Props) => {  
  const [state, dispatch] = useReducer(Reducer, InitState)
  useEffect(() => {
      Actions.GetItem(props.Id, props.TreeId, dispatch);
  }, [props.Id])
  let suKienFormInput:any = suKienFormInputJson;
  const refNotification = useRef<any>();
  const refDynamicForm = useRef<any>();
  const ActionEvents = {
    onClickSave: async () => {
      let isValid = refDynamicForm.current.onValidation();      
      if(isValid)
      {        
        let stateValues = refDynamicForm.current.getStateValues();      
        stateValues.IdNhomSuKienCha = props.TreeId;                    
        let res:IResponseMessage = null;                
                             
        if(props.Id) 
        {          
          res = await Actions.CheckDuplicateAttributes(stateValues.Id, stateValues.Ma, stateValues.IdNhomSuKienCha, dispatch);
        
          if(res.Data) 
          {
            refNotification.current.showNotification("warning", Message.DuplicateAttribute_Code);    
            return; 
          }     
          res = await Actions.UpdateItem(stateValues);                   
        }          
        else
        // CheckDuplicateAttributesCreateNew
        {
          res = await Actions.CheckDuplicateAttributesCreateNew(stateValues.Ma, stateValues.IdNhomSuKienCha, dispatch);
        
          if(res.Data) 
          {
            refNotification.current.showNotification("warning", Message.DuplicateAttribute_Code);    
            return; 
          }     
          res = await Actions.CreateItem(stateValues);  
        }           
        if(res.Success) {            
          refNotification.current.showNotification("success", res.Message);          
          props.ReloadTableItems();
        }                    
      }
    },
  }
  return(
    <>
      <CNotification ref={refNotification} />   
      <CDynamicForm ref={refDynamicForm} initValues={state.DataItem} formDefs={suKienFormInput} actionEvents={ActionEvents} />
    </>
  )
}
const mapState = ({ ...state }) => ({
  
});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(SuKienForm);