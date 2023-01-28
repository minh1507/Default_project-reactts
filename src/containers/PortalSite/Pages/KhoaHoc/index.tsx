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
  const [show, setShow] = useState(false);
  const [idCheck, setIdCheck] = useState("");
  const [slide, setSlide] = useState(0);
  const data = [
    { name: "Top khóa học bán chạy nhất" },
    { name: "Khóa học mới" },
    { name: "Khóa học được yêu thích" },
    { name: "Khóa học cho người mới" },
    { name: "Các khóa nâng thể trạng" },
    { name: "Tăng cường thể lực" },
    { name: "Bài tập hàng ngày" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "Top khóa học bán chạy nhất" },
    { name: "Khóa học mới" },
    { name: "Khóa học được yêu thích" },
    { name: "Khóa học cho người mới" },
    { name: "Các khóa nâng thể trạng" },
    { name: "Tăng cường thể lực" },
    { name: "Bài tập hàng ngày" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
  ];
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
  };

  const wrapData = () => {
    return data.slice(slide, slide + 20);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img mb-4">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KHÓA HỌC</h1>
      </div>

      <div className="container-xl">
        <h3 className="text-danger text-center text-uppercase tieu-de mb-3">
          Chủ đề nổi bật
        </h3>
        <div className=" slide-father mb-4">
          {data &&
            wrapData().map((value: any) => {
              return (
                <div className="slide-child">
                  <div className="slide-element">{value.name}</div>
                </div>
              );
            })}
        </div>

        <h3 className="text-danger text-center text-uppercase tieu-de mb-3">
          Khóa học
        </h3>

        <div className="container-khoa-hoc khoa-hoc-header flex-column">
          {/* <p
              className="text-kh-header"
              onClick={() => {
                changeNavState();
              }}
            >
              <i className="bi bi-filter"></i>
            </p> */}
          <div className={`kh-search-bar`}>
            <span>
              <i className={`bi bi-search`}></i>
            </span>

            <input placeholder="Tìm kiếm" className="kh-input" />
          </div>
          <div className="kh-contain-result">
            Tìm thấy <span className="kh-result">10</span> kết quả
          </div>
        </div>

        <div className="container-khoa-hoc pb-3">
          <div className={`side-left-khoa-hoc `}>
            <div className="accordion pim" id="accordionPanelsStayOpenExample">
              {state.DataItem &&
                state.DataItem.DanhSachMonHocCon.map((value: Item) => (
                  <div className="accordion-item pim">
                    <h2
                      className="accordion-header"
                      id={`panelsStayOpen-heading${value.Id}`}
                    >
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${value.Id}`}
                        aria-expanded="true"
                        aria-controls={`panelsStayOpen-collapse${value.Id}`}
                      >
                        {value.TenMonHoc}
                      </button>
                    </h2>
                    <div
                      id={`panelsStayOpen-collapse${value.Id}`}
                      className="accordion-collapse collapse "
                      aria-labelledby={`panelsStayOpen-heading${value.Id}`}
                    >
                      <div className="accordion-body pim">
                        <div
                          className="accordion "
                          id="accordionPanelsStayOpenExample"
                        >
                          <div className="accordion-item pom">
                            <h2
                              className="accordion-header"
                              id="panelsStayOpen-headingOne"
                            >
                              <button
                                className="accordion-button "
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne"
                                aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne"
                              >
                                Bai 1
                              </button>
                            </h2>
                            <div
                              id="panelsStayOpen-collapseOne"
                              className="accordion-collapse collapse"
                              aria-labelledby="panelsStayOpen-headingOne"
                            >
                              <div className="accordion-body pim">
                                <div
                                  className="accordion"
                                  // id="accordionPanelsStayOpenExample"
                                >
                                  <div className="accordion-item pom">
                                    <h2
                                      className="accordion-header"
                                      // id="panelsStayOpen-heading2"
                                    >
                                      <button
                                        className="accordion-button"
                                        type="button"
                                        // data-bs-toggle="collapse"
                                        // data-bs-target="#panelsStayOpen-collapse2"
                                        // aria-expanded="true"
                                        // aria-controls="panelsStayOpen-collapse2"
                                      >
                                        Bai 1
                                      </button>
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            {/* {state.DataItem &&
              state.DataItem.DanhSachMonHocCon.map((value: Item) => (
                <div key={uuidv4()} className={`accordion-item`}>
                  <div
                    onClick={() => {
                      showNav(value.Id);
                    }}
                    className="d-flex justify-content-between w-100 kh-child-ct"
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

                  <div
                    className={`mt-3 w-100 kh-child-item-nav-left ${
                      show &&
                      (idCheck as string) == (value.Id as string) &&
                      "kh-child-item-nav-left-active"
                    }`}
                  >
                    <div className="d-flex justify-content-between w-100 kh-child-ct round-kh-text">
                      <span className="item-mon-hoc-text round-kh-text">
                        Bai1
                      </span>
                      <i
                        className={`bi bi-caret-down-fill kh-size-arrow text-danger`}
                      ></i>
                    </div>
                    <div className="d-flex justify-content-between w-100 kh-child-ct round-kh-text">
                      <span className="item-mon-hoc-text round-kh-text">
                        Bai1
                      </span>
                      <i
                        className={`bi bi-caret-down-fill kh-size-arrow text-danger`}
                      ></i>
                    </div>
                    <div className="d-flex justify-content-between w-100 kh-child-ct round-kh-text">
                      <span className="item-mon-hoc-text round-kh-text">
                        Bai1
                      </span>
                      <i
                        className={`bi bi-caret-down-fill kh-size-arrow text-danger`}
                      ></i>
                    </div>
                  </div>
                </div>
              ))} */}
          </div>

          <div
            className={`side-right-khoa-hoc ${changeNav && "kh-right-ddil"}`}
          >
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-5 ">
                  <img src={bg40} className="img-kh-cls " alt="..." />
                </div>
                <div className="col-md-7">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">Tên khóa học</h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text gia-tien-kh-l">
                      2.000.000₫{" "}
                      <span className="gia-tien-giam-gias">1.000.000₫</span>
                    </p>
                    <p className="card-text posp-khso text-dark">
                      Phụ trách: thầy Nghĩa
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Mo ta Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Vel perferendis nostrum odio maxime delectus beatae,
                      maiores, nulla placeat omnis ea accusantium possimus quam
                      ratione. Magnam adipisci iusto maiores labore animi. Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit. Quae
                      iure neque mollitia nostrum numquam laborum error est qui.
                    </p>
                    <div className="d-flex justify-content-center mb-1">
                      <button className="header_btn bg-danger text-light chio-kh-khso">
                        Xem tất cả
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={bg40} className="img-kh-cls" alt="..." />
                </div>
                <div className="col-md-7">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">Tên khóa học</h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text gia-tien-kh-l">
                      2.000.000₫{" "}
                      <span className="gia-tien-giam-gias">1.000.000₫</span>
                    </p>
                    <p className="card-text posp-khso text-dark">
                      Phụ trách: thầy Nghĩa
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Mo ta Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Vel perferendis nostrum odio maxime delectus beatae,
                      maiores, nulla placeat omnis ea accusantium possimus quam
                      ratione. Magnam adipisci iusto maiores labore animi. Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit. Quae
                      iure neque mollitia nostrum numquam laborum error est qui.
                    </p>
                    <div className="d-flex justify-content-center mb-1">
                      <button className="header_btn bg-danger text-light chio-kh-khso">
                        Xem tất cả
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-5">
                  <img src={bg40} className="img-kh-cls" alt="..." />
                </div>
                <div className="col-md-7">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">Tên khóa học</h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>

                    <p className="card-text gia-tien-kh-l">
                      2.000.000₫{" "}
                      <span className="gia-tien-giam-gias">1.000.000₫</span>
                    </p>
                    <p className="card-text posp-khso text-dark">
                      Phụ trách: thầy Nghĩa
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Mo ta Lorem ipsum dolor sit amet consectetur, adipisicing
                      elit. Vel perferendis nostrum odio maxime delectus beatae,
                      maiores, nulla placeat omnis ea accusantium possimus quam
                      ratione. Magnam adipisci iusto maiores labore animi. Lorem
                      ipsum dolor sit, amet consectetur adipisicing elit. Quae
                      iure neque mollitia nostrum numquam laborum error est qui.
                    </p>
                    <div className="d-flex justify-content-center mb-1">
                      <button className="header_btn bg-danger text-light chio-kh-khso">
                        Xem tất cả
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center ">
              <nav aria-label="Page navigation example ">
                <ul className="pagination">
                  <li className="page-item ">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
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
