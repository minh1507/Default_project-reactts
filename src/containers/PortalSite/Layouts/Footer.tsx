import React from "react";
import { connect } from "react-redux";

interface Props {}

const Footer = (props: Props) => {
  return <div>footer</div>;
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(Footer);
