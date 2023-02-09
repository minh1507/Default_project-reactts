import React, { useState } from "react";
import { connect } from "react-redux";
import ban from "assets/img/banner.jpg";
import { useHistory } from "react-router-dom";

interface Props {}

const GioHang = (props: Props) => {
  const history = useHistory();

  const gotoThanhToan = () => {
    history.push("/thanh-toan");
  };

  return (
    <div style={{ padding: "30px 0" }}>
    <h4 className="text-danger text-center tieu-de mb-3">
      {"Giỏ hàng"}
    </h4>
    <div className="container-xl">
      <div className="row">
        <div className="col-sm-8">
          <div className="row mb-2">
            <div className="card">
              <div className="card-body" style={{ paddingTop: 10, paddingBottom: 10 }}>
                <div className="row">
                  <div className="col-sm-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                        defaultChecked
                        style={{marginTop: 0}}
                      />
                  </div>
                  <div className="col-sm-8 pl-0">
                    <p className="underline-head-tt">Tất cả (<b>1</b> sản phẩm)</p>
                  </div>
                  <div className="col-sm-2 text-center">
                    <p className="text-danger"><b>Giá tiền</b></p>
                  </div>
                  <div className="col-sm-1">
                    <div className="text-muted remove cursor-pointer text-center"><i className="bi bi-trash3"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-1">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckChecked"
                        defaultChecked
                      />
                  </div>
                  <div className="col-sm-3 pl-0">
                    <img src={ban} className="img_card_tc" />
                  </div>
                  <div className="col-sm-5 pr-0">
                    <p className="gio-hang-mg-top underline-head-tt">GIÁO ÁN 6 THÁNG FM SUB 4 CHO NGƯỜI PACE 7-8</p>
                  </div>
                  <div className="col-sm-2 text-center">
                    <p className="card-text gia-tien-kh-l marginBottom-5 gio-hang-mg-top"><span><span>4.500.000₫</span></span></p>
                    <span className="gia-tien-giam-gias">8.900.000₫</span>
                  </div>
                  <div className="col-sm-1">
                    <div className="text-muted remove gio-hang-mg-top cursor-pointer text-center"><i className="bi bi-trash3"></i></div>
                  </div>
                </div>
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
                          <span className="gia-tien-kh-l" style={{ fontSize: 26 }}>2.999.000đ</span>{"  "}
                          <span className="gia-tien-giam-gias" style={{ fontSize: 16 }}>8.900.000₫</span>
                        </p>
                      </div>
                      <div className="col-sm-12">
                        <button
                            style={{ width:"100%" }}
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
