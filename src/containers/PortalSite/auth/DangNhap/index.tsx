import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Actions } from "store/Global/Action";

interface Props {
  UserLogin?: Function;
}

const DangNhap = (props: Props) => {
 
  return (
    <div>
     dang nhap
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {
  UserLogin: Actions.UserLogin,
};

export default connect(mapState, mapDispatchToProps)(DangNhap);
