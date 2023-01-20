import CDynamicForm from "components/CDynamicForm";
import CNotification from "components/CNotification";
import { IResponseMessage } from "common/Models";
import { Message } from "common/Enums";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import HocVienFormInputJson from "./FormInput.json";
interface Props {
  Id: string;
  ReloadTableItems: any;
  build: any;
  hideDialog: Function;
}

const HocVienForm = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  useEffect(() => {
    Actions.GetItem(props.Id, dispatch);
  }, [props.Id]);
  let HocVienFormInput: any = HocVienFormInputJson;
  const refNotification = useRef<any>();
  const refDynamicForm = useRef<any>();
  const ActionEvents = {
    onClickActivate: async () => {
      let res: IResponseMessage = null;

      if (state.DataItem.IsActive) {
        res = await Actions.UnActive(state.DataItem.Id);
      } else {
        res = await Actions.Active(state.DataItem.Id);
      }
      if (res.Success) {
        refNotification.current.showNotification("success", res.Message);
        props.ReloadTableItems();
        props.hideDialog();
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
        formDefs={props.build == 1 ? HocVienFormInput[0] : HocVienFormInput[1]}
        actionEvents={props.build == 2 && ActionEvents}
      />
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(HocVienForm);
