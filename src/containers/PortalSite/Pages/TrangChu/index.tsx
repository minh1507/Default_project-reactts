import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import CatService from "services/CatService";

interface Props {}

const TrangChu = (props: Props) => {
 
  const [cat, setCat] = useState(
    {
      data: []
    }
  )
  const fetch = async () => {
    let data = await CatService.GetItems()
    setCat(data)
  }
  useEffect(() => {
    fetch()
  }, [])

  return (
    <div>
      {cat && cat.data.map((e: any, ei:any) => {
        return (<div>{e.name}</div>)
      })}
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(TrangChu);
