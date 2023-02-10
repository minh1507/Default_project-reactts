import React from "react";
import { connect } from "react-redux";

interface Props {}

const CaNhan = (props: Props) => {
  return (
    <div>
      2
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(CaNhan);
