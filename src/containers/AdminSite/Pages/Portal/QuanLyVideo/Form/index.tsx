import CDynamicForm from "components/CDynamicForm";
import CNotification from "components/CNotification";
import { IResponseMessage } from "common/Models";
import { Message } from "common/Enums";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import VideoFormInputJson from "./FormInput.json";
interface Props {
  Id: string;
  ReloadTableItems: any;
}

const VideoForm = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  useEffect(() => {
    Actions.GetItem(props.Id, dispatch);
    Actions.GetCategories("IdNhomVideo", dispatch);
  }, [props.Id]);
  let VideoFormInput: any = VideoFormInputJson;
  const refNotification = useRef<any>();
  const refDynamicForm = useRef<any>();
  const ActionEvents = {
    onClickSave: async () => {
      let isValid = refDynamicForm.current.onValidation();
      if (isValid) {
        let stateValues = refDynamicForm.current.getStateValues();
        let res: IResponseMessage = null;

        if (props.Id) {
          res = await Actions.UpdateItem(stateValues);
        } else {
          res = await Actions.CreateItem(stateValues);
        }
        if (res.Success) {
          refNotification.current.showNotification("success", res.Message);
          props.ReloadTableItems();
        }
      }
    },
  };
  return (
    <>
      <CNotification ref={refNotification} />
      <CDynamicForm
        ref={refDynamicForm}
        options={state.Options}
        initValues={state.DataItem}
        formDefs={VideoFormInput}
        actionEvents={ActionEvents}
      />
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(VideoForm);
