import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/bg40.png";
import MainCard from "../General/MainCard";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { String } from "common/String";
const { v4: uuidv4 } = require("uuid");

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
          <div className="row d-flex">
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              key={uuidv4()}
              title={`hai`}
              className="col"
              style={{ marginBottom: "8px" }}
            >
              <div
                className="card card_main_container wrapper_c"
                style={{
                  cursor: "pointer",
                  height: "380px",
                  width: "18rem",
                  position: "relative",
                }}
              >
                <div className="wrapper_card">
                  <img src={bg40} className="card-img-top" alt="..." />
                </div>

                <div
                  className="card-body card-bodys"
                  style={{
                    textAlign: "start",
                  }}
                >
                  <h6 className="card-title titleXl head_z">{"hai"}</h6>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    ></span>

                    <span
                      style={{
                        fontSize: "calc(1rem * 1.3)",
                        color: "red",
                      }}
                    >
                      ₫
                    </span>

                    <span
                      style={{
                        marginLeft: "8px",
                        color: "gray",
                        fontWeight: "300",
                        textDecoration: "line-through",
                      }}
                    >
                      {String.num(1000)}₫
                    </span>
                  </p>

                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      fontWeight: "bold",
                    }}
                  >
                    Dự kiến: <span className="text-dark">{"Hai"}</span>
                  </p>
                  <p
                    className="mo-ta"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      textAlign: "justify",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veritatis culpa neque veniam possimus! Dicta laborum enim
                    earum exercitationem rem cupiditate, esse doloribus. Dolorum
                    quaerat molestias dolore nihil! Iure, veritatis numquam?
                  </p>
                  <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                      style={{ width: "120px" }}
                    >
                      Xem chi tiết
                    </button>
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

export default connect(mapState, mapDispatchToProps)(KhoaHoc);
