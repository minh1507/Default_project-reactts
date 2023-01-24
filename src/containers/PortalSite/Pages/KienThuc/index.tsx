import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import MainCard from "../General/MainCard";
import bg40 from "assets/img/bg40.png";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";

interface Props {}

const KienThuc = (props: Props) => {
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);

  const changeUl = (num: number) => {
    setChange(num);
  };

  useEffect(() => {
    Actions.GetDSNhomTinTucPortal(
      "61e2c71d-0e59-4cf8-8c63-25888f6be8b6",
      dispatch
    );
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={bg40} width="100%" height="auto" />
      <div className="box_sub_d mt-4" style={{ padding: "0 10px" }}>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Menu
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 chen" style={{ textAlign: "center" }}>
        <ul
          id="menu_bar"
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {state.DataItem &&
            state.DataItem.map((tree: Item) => (
              <li>
                <h5
                  style={{ margin: 0 }}
                  onClick={() => {
                    changeUl(2);
                  }}
                  className={`${change == 2 ? "menu_active" : "menu_unactive"}`}
                >
                  {tree.Ten}
                </h5>
              </li>
            ))}
        </ul>

        <MainCard paths="/kien-thuc-chi-tiet" />
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
