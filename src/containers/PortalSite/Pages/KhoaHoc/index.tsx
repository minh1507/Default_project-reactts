import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/bg40.png";
import MainCard from "../General/MainCard";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { String } from "common/String";

interface Props {}

const KhoaHoc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);

  useEffect(() => {
    Actions.GetMonHocPortal("GA1", "20", dispatch);
  }, []);

  return (
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <img className="mb-3" src={bg40} width="100%" height="auto" />
      <div className="container-khoa-hoc pb-3">
        <div className="side-left-khoa-hoc">
          <p className="text-head-mon-hoc">Môn học</p>
          {state.DataItem &&
            state.DataItem.DanhSachMonHocCon.map((value: Item) => (
              <div className="item-mon-hoc">
                <img
                  src={value.URL_AnhDaiDien as string}
                  style={{
                    width: "40px",
                    height: "40px",
                    aspectRatio: "auto 40 / 40",
                    borderRadius: "8px",
                  }}
                />
                <span className="item-mon-hoc-text">
                  {String.giaoAn(value.TenMonHoc as string)}
                </span>
              </div>
            ))}
        </div>
        <div className="side-right-khoa-hoc">
          <div className="menu-khoa-hoc">
            <div className="item-menu-khoa-hoc">Tất cả</div>
            <div className="item-menu-khoa-hoc">Khóa học của tôi</div>
            <div className="item-menu-khoa-hoc">Cho người mới</div>
            <div className="item-menu-khoa-hoc">Cải thiện thành tích</div>
            <div className="item-menu-khoa-hoc">Chạy road</div>
            <div className="item-menu-khoa-hoc">Chạy trail</div>
            <div className="item-menu-khoa-hoc">Chỉnh dáng</div>
            <div className="item-menu-khoa-hoc">Ironman</div>
            <div className="item-menu-khoa-hoc">Cho trẻ em</div>
            <div className="item-menu-khoa-hoc">Combo</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KhoaHoc);
