import CDynamicForm from "components/CDynamicForm";
import CNotification from "components/CNotification";
import { IResponseMessage, IUserInfo } from "common/Models";
import { Message } from "common/Enums";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import TinTucFormInputJson from "./FormInput.json";
import { Cookie } from "common/Cookie";
interface Props {
  Id: string;
  ReloadTableItems: any;
}

const TinTucForm = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  let userInfo: IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));
  useEffect(() => {
    Actions.GetItem(props.Id, dispatch);
    Actions.GetTreeList("IdNhomTinTuc", dispatch);
    if (!props.Id) {
      Actions.SetTacGia(userInfo.UserName, dispatch);
    }
  }, [props.Id]);
  let tinTucFormInput: any = TinTucFormInputJson;
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
        formDefs={tinTucFormInput}
        actionEvents={ActionEvents}
      />
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(TinTucForm);
