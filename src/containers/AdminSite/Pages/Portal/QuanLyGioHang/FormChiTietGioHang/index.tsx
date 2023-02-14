import React, { useEffect, useReducer, useRef, useState } from 'react'
import { connect } from "react-redux";
import { InitState } from './InitState';
import { Actions } from './Action';
import { Reducer } from './Reducer';
import ChiTietGioHangFormInputJson from './FormInput.json';
interface Props {
  Id: string;
  ReloadTableItems: any
}

const ChiTietGioHangForm = (props: Props) => {  
  const [state, dispatch] = useReducer(Reducer, InitState)
  useEffect(() => {

  }, [])
  return(
    <>
      {props.Id}
    </>
  )
}
const mapState = ({ ...state }) => ({
  
});
const mapDispatchToProps = {
  
};

export default connect(mapState, mapDispatchToProps)(ChiTietGioHangForm);