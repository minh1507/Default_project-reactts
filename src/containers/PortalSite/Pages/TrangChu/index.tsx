import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";

interface Props {}

const TrangChu = (props: Props) => {
 

  return (
    <div className="main_container">
     main
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(TrangChu);
