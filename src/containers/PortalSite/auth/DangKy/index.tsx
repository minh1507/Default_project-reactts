import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Actions } from "store/Global/Action";

interface Props {
  UserSignup?: Function;
}

const DangKy = (props: Props) => {
 
  return (
    <div>
     dang ky
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {
  UserSignup: Actions.UserSignup,
};

export default connect(mapState, mapDispatchToProps)(DangKy);
