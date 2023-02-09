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
    <div className="container-xl mb-5">
      <div className="row">
        <div className="col-sm-8">
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
                  <div className="col-sm-3">
                    <img src={ban} className="img_card_tc" />
                  </div>
                  <div className="col-sm-4">
                  <p className="mb-1" style={{ width: "400px" }}>
                          GIÁO ÁN 6 THÁNG FM SUB 4 CHO NGƯỜI PACE 7-8
                        </p>
                        <p className="mb-1" style={{ fontSize: "calc(1rem *0.8)" }}>
                          25/12/2022 at 8.00 PM
                        </p>
                        <div>
                          <span>
                            <i className="bi bi-clock" /> 3 tháng
                          </span>
                          <span
                            className="text-danger"
                            style={{ marginLeft: "5px" }}
                          >
                            <i className="bi bi-cash" /> Miễn phí gia hạn thêm 3
                            tháng
                          </span>
                        </div>
                  </div>
                  <div className="col-sm-2">
                    <span
                          className="text-danger"
                          style={{ fontWeight: "bold", marginLeft: "5px" }}
                        >
                          2.999.000đ
                        </span>{" "}
                        <span
                          style={{
                            fontSize: "calc(1rem * 0.8)",
                            textDecoration: "line-through",
                          }}
                        >
                          5.000.000đ
                        </span>
                  </div>
                  <div className="col-sm-1">
                  <span
                          style={{ cursor: "pointer" }}
                          className="text-muted remove"
                        >
                          Xóa
                        </span>
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
                  <div className="d-flex gap-3" style={{ justifyContent: "flex-end" }}>
                    <div>
                      <p style={{ fontSize: "calc(1rem*0.9)", fontWeight: "bold" }}>
                        Tổng thanh toán
                      </p>
                      <p style={{ fontSize: "calc(1rem*0.9)" }} className="text-muted">
                        1 khóa học
                      </p>
                    </div>
                    <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      2.999.000 đ
                    </p>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                      onClick={() => {
                        gotoThanhToan();
                      }}
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
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
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(GioHang);
