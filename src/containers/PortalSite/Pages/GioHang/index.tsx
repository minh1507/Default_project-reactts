import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import ban from "assets/img/banner.jpg";
import { useHistory } from "react-router-dom";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { InitState } from "./InitState";
import { String } from "common/String";

interface Props {}
const GioHang = (props: Props) => {
  const history = useHistory();
  const [state, dispatch] = useReducer(Reducer, InitState);

  const gotoThanhToan = () => {
    history.push("/thanh-toan");
  };

  useEffect(() => {
    var cartInfo = sessionStorage.getItem("cart-info");
    if(cartInfo){
      const output = cartInfo.split(",").map((id) => ({ id }));
      console.log(output);
      Actions.GetGioHang(output, dispatch);
    }  
  }, []);

  const deleteProduct = (id: String, ie:any) => {
    var cartInfo = sessionStorage.getItem("cart-info");
    if(cartInfo){
      const output = cartInfo.split(",")
      let index = output.findIndex((val:any) => val == id);
      if(output.length > 1){
        output[index] = output[0]
        output.shift()
        
        if(output.length === 1)
        {
          sessionStorage.setItem("cart-info", output[0].toString());
        }
        else{
          sessionStorage.setItem("cart-info", output.join(","));
        }
        
      }
      else{
        output.shift()
        sessionStorage.setItem("cart-info", "");
      }
      Actions.restore(ie, dispatch)
    }  
  }

  const deleteAll = () => {
    sessionStorage.setItem("cart-info", "");
    Actions.GetGioHangs([], dispatch);
  }

  const onCheck = (e: any, ie: any, HocPhiGiamGia:any, HocPhiGoc:any) => {
    Actions.ChangeData(e.target.checked, ie, HocPhiGiamGia, HocPhiGoc, dispatch);
  }

  const changeAll = (e: any) => {
    Actions.ChangeAll(e.target.checked,dispatch)
  }

  console.log(state);
  return (
    <div style={{ padding: "30px 0" }}>
      <h4 className="text-danger text-center tieu-de mb-3">{"Giỏ hàng"}</h4>
      <div className="container-xl">
        <div className="row">
          <div className="col-sm-8">
            <div className="row mb-2">
              <div className="card">
                <div
                  className="card-body"
                  style={{ paddingTop: 10, paddingBottom: 10 }}
                >
                  <div className="row">
                    <div className="col-sm-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                        onChange={(e) => changeAll(e)}
                        style={{ marginTop: 0 }}
                      />
                    </div>
                    <div className="col-sm-8 pl-0">
                      <p className="underline-head-tt">
                        Tất cả (<b>{state.Count}</b> sản phẩm)
                      </p>
                    </div>
                    <div className="col-sm-2 text-center">
                      <p className="text-danger">
                        <b>Giá tiền</b>
                      </p>
                    </div>
                    <div className="col-sm-1">
                      <div className="text-muted remove cursor-pointer text-center" onClick={() => {deleteAll()}}>
                        <i className="bi bi-trash3"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <div className="card-body">
                  {state.DataItem &&
                    state.DataItem.map((data: any, ie: any) => {
                      return (
                        <div className="row">
                          <div className="col-sm-1">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`${data.Id}`}
                              onChange={(e)=> {onCheck(e, ie, data.HocPhiGiamGia, data.HocPhiGoc)}}
                              checked={data.Check}
                            />
                          </div>
                          <div className="col-sm-3 pl-0">
                            <img
                              src={data.URL_AnhDaiDien}
                              className="img_card_tc"
                            />
                          </div>
                          <div className="col-sm-5 pr-0">
                            <p className="gio-hang-mg-top underline-head-tt">
                              {data.TieuDe}
                            </p>
                          </div>
                          <div className="col-sm-2 text-center">
                            <p className="card-text gia-tien-kh-l marginBottom-5 gio-hang-mg-top">
                              <span>
                                <span>{String.num(data.HocPhiGiamGia)}₫</span>
                              </span>
                            </p>
                            <span className="gia-tien-giam-gias">
                              {String.num(data.HocPhiGoc)}₫
                            </span>
                          </div>
                          <div className="col-sm-1">
                            <div className="text-muted remove gio-hang-mg-top cursor-pointer text-center" onClick={() => {deleteProduct(data.Id, ie)}}>
                              <i className="bi bi-trash3"></i>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-12">
                        <p>
                          Tổng tiền: {"  "}
                          <span
                            className="gia-tien-kh-l"
                            style={{ fontSize: 26 }}
                          >
                            {String.num(state.Totalpre)}đ
                          </span>
                          {"  "}
                          {state.Totalpre != state.Totalnext && (
                            <span
                              className="gia-tien-giam-gias"
                              style={{ fontSize: 16 }}
                            >
                              {String.num(state.Totalnext)}₫
                            </span>
                          )}
                        </p>
                      </div>
                      <div className="col-sm-12">
                        <button
                          style={{ width: "100%" }}
                          onClick={() => {
                            gotoThanhToan();
                          }}
                          className="header_btn bg-danger text-light mt-3"
                        >
                          THANH TOÁN
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(GioHang);
