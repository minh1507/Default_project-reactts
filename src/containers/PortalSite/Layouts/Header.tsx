import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Actions } from "store/Global/Action";

interface Props {
  global: any;
  UserLogout?: Function;
}

const Header = (props: Props) => {

  return (
    <div>
      header
    </div>
  );
};
const mapState = ({ ...state }) => ({
  global: state.global,
});
const mapDispatchToProps = {
  UserLogout: Actions.UserLogout,
};

export default connect(mapState, mapDispatchToProps)(Header);
