import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import MainCard from "../General/MainCard";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
const { v4: uuidv4 } = require("uuid");
import { String } from "common/String";

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
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-khoa-hoc pb-3 wrapper_kien_thuc_office">
        <div className="menu-khoa-hoc mb-3">
          {state.DataItem &&
            state.DataItem.map((value: Item) => (
              <div className="item-menu-khoa-hoc">{value.Ten}</div>
            ))}
        </div>
        <div className="row d-flex">
          <div
            key={uuidv4()}
            title={`hai`}
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
            className="col d-flex justify-content-center align-items-center"
            style={{ marginBottom: "8px", width: "18.1rem" }}
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
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
