import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Khoahoc.png";
import MainCard from "../General/MainCard";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { String } from "common/String";
const { v4: uuidv4 } = require("uuid");

interface Props {}

const KhoaHoc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [change, setChange] = useState(false);
  const [changeNav, setChangeNav] = useState(false);
  const [changeNavLeft, setChangeNavLeft] = useState(false);
  const [dissable, setDissable] = useState(false);
  const [show, setShow] = useState(false);
  const [idCheck, setIdCheck] = useState("");
  useEffect(() => {
    Actions.GetMonHocPortal("GA1", "20", dispatch);
  }, []);

  const changeState = () => {
    setChange(!change);
  };

  const showNav = (Id: any) => {
    setShow(!show);
    if (!show) {
      setIdCheck(Id);
    } else {
      setIdCheck("");
    }
  };

  const changeNavState = () => {
    setChangeNav(!changeNav);
    if (!changeNavLeft) {
      setTimeout(() => {
        setChangeNavLeft(!changeNavLeft);
      }, 500);
    } else {
      setChangeNavLeft(!changeNavLeft);
    }

    if (!dissable) {
      setTimeout(() => {
        setDissable(!dissable);
      }, 600);
    } else {
      setDissable(!dissable);
    }
  };
  console.log(state);

  return (
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KHÓA HỌC</h1>
      </div>

      <div className="container-khoa-hoc khoa-hoc-header d-flex justify-content-between align-items-center">
        <div className="d-flex gap-1">
          <p
            className="text-kh-header"
            onClick={() => {
              changeNavState();
            }}
          >
            <i className="bi bi-filter"></i> Lọc
          </p>
          <div className={`kh-search-bar ${change && "kh-search-bar-active"}`}>
            <i
              onClick={() => {
                changeState();
              }}
              className={`bi bi-search ${change && "kh-search-icon-active"}`}
            ></i>
            <input
              placeholder="Tìm kiếm"
              className={`kh-input ${change && "kh-input-active"}`}
            />
          </div>
        </div>
        <div className="kh-contain-result">
          <span className="kh-result">10</span> Kết quả
        </div>
      </div>

      <div className="container-khoa-hoc pb-3">
        <div
          className={`side-left-khoa-hoc ${
            dissable ? "kh-item-side-left" : "kh-item-side-left-active"
          } ${changeNav && "side-left-khoa-hoc-active"}`}
        >
          {state.DataItem &&
            state.DataItem.DanhSachMonHocCon.map((value: Item) => (
              <div key={uuidv4()} className={`item-mon-hoc d-flex flex-column`}>
                <div
                  onClick={() => {
                    showNav(value.Id);
                  }}
                  className="d-flex justify-content-between w-100 h-100 kh-child-ct"
                >
                  <span className="item-mon-hoc-text">
                    {String.giaoAn(value.TenMonHoc as string)}
                  </span>
                  <span
                    className={`${
                      show &&
                      (idCheck as string) == (value.Id as string) &&
                      "kh-arrow"
                    }`}
                  >
                    <i className={`bi bi-caret-down-fill kh-size-arrow`}></i>
                  </span>
                </div>
                {show && (idCheck as string) == (value.Id as string) && (
                  <div className="mt-3 w-100 h-100 kh-child-item-nav-left">
                    ok
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="side-right-khoa-hoc">
          <div className="row d-flex">hi</div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KhoaHoc);
