import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Khoahoc.png";
import MainCard from "../General/MainCard";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
const { v4: uuidv4 } = require("uuid");
import ba1 from "assets/img/ba2.jpg";

interface Props {}

const KhoaHoc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [slidekh, setSlidekh] = useState(false);
  const [slide, setSlide] = useState(0);
  const [name, setName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
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

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const wrapData = () => {
    return data.slice(slide, slide + 10);
  };

  const kh2 = useRef(null);
  const kh1 = useRef(null);
  const nextKHNB = () => {
    setTimeout(() => {
      setSlidekh(true);
    }, 600);

    kh2.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const prevKHNB = () => {
    setTimeout(() => {
      setSlidekh(false);
    }, 600);

    kh1.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const changeName = (name: string) => {
    setName(name);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img mb-4">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KHÓA HỌC</h1>
      </div>

      <div className="container-xl ">
        {width > 1110 && (
          <h3 className="text-danger text-center text-uppercase tieu-de mb-3">
            Chủ đề nổi bật
          </h3>
        )}

        {width > 1110 && (
          <div className="kh-sl-ca1">
            <div className="gv-kh mb-4">
              <div className="gv-c" ref={kh1}>
                <div className=" slide-father">
                  {data &&
                    wrapData().map((value: any) => {
                      return (
                        <div key={uuidv4()} className="slide-child">
                          <div className="slide-element">{value.name}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
              <div className="gv-c" ref={kh2}>
                <div className=" slide-father">
                  {data &&
                    wrapData().map((value: any) => {
                      return (
                        <div key={uuidv4()} className="slide-child">
                          <div className="slide-element">{value.name}</div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {!slidekh && (
              <p className="nextKHNB" onClick={nextKHNB}>
                <i className="bi bi-arrow-right-circle-fill"></i>
              </p>
            )}
            {slidekh && (
              <p className="prevKHNB" onClick={prevKHNB}>
                <i className="bi bi-arrow-left-circle-fill"></i>
              </p>
            )}
          </div>
        )}

        <img className="mb-4 kh-cdnb1x" src={ba1} width="100%" height="auto" />

        {name ? (
          <h3 className="text-danger text-center text-uppercase tieu-de mb-3 kh-apeperar">
            {name}
          </h3>
        ) : (
          <h3 className="text-danger text-center text-uppercase tieu-de mb-3">
            Khóa học
          </h3>
        )}

        <div className="container-khoa-hoc khoa-hoc-header justify-content-between">
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

        {width <= 1110 && (
          <a
            className="mob-kh-btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-filter"></i>
          </a>
        )}

        {width <= 1110 && (
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div
                className="accordion pim"
                id="accordionPanelsStayOpenExample"
              >
                {state.DataItem &&
                  state.DataItem.DanhSachMonHocCon.map((value: Item) => (
                    <div key={uuidv4()} className="accordion-item pim">
                      <h2
                        className="accordion-header"
                        id={`panelsStayOpen-heading${value.Id}`}
                      >
                        <div className="d-flex justify-content-between">
                          <span
                            className="text-kh-nav-leftbar"
                            onClick={() => {
                              changeName(value.TenMonHoc as string);
                            }}
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                          >
                            {value.TenMonHoc}
                          </span>
                          <span
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#panelsStayOpen-collapse${value.Id}`}
                            aria-expanded="true"
                            aria-controls={`panelsStayOpen-collapse${value.Id}`}
                          ></span>
                        </div>
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
                                <div className="d-flex justify-content-between">
                                  <span
                                    className="text-kh-nav-leftbar"
                                    onClick={() => {
                                      changeName("Bai 1");
                                    }}
                                  >
                                    Bai 1
                                  </span>
                                  <span
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#panelsStayOpen-collapseOne`}
                                    aria-expanded="true"
                                    aria-controls={`panelsStayOpen-collapseOne`}
                                  ></span>
                                </div>
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
                                        <div className="d-flex justify-content-between">
                                          <span
                                            className="text-kh-nav-leftbar"
                                            style={{ padding: "16px 0" }}
                                            onClick={() => {
                                              changeName("Bai 1 trong bai 1");
                                            }}
                                          >
                                            Bai 1 trong bai 1
                                          </span>
                                        </div>
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
            </div>
          </div>
        )}

        <div className="container-khoa-hoc pb-3">
          {width > 980 && (
            <div className={`side-left-khoa-hoc `}>
              <div
                className="accordion pim"
                id="accordionPanelsStayOpenExample"
              >
                {state.DataItem &&
                  state.DataItem.DanhSachMonHocCon.map((value: Item) => (
                    <div key={uuidv4()} className="accordion-item pim">
                      <h2
                        className="accordion-header"
                        id={`panelsStayOpen-heading${value.Id}`}
                      >
                        <div className="d-flex justify-content-between">
                          <span
                            className="text-kh-nav-leftbar"
                            onClick={() => {
                              changeName(value.TenMonHoc as string);
                            }}
                          >
                            {value.TenMonHoc}
                          </span>
                          <span
                            className="accordion-button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#panelsStayOpen-collapse${value.Id}`}
                            aria-expanded="true"
                            aria-controls={`panelsStayOpen-collapse${value.Id}`}
                          ></span>
                        </div>
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
                                <div className="d-flex justify-content-between">
                                  <span
                                    className="text-kh-nav-leftbar"
                                    onClick={() => {
                                      changeName("Bai 1");
                                    }}
                                  >
                                    Bai 1
                                  </span>
                                  <span
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#panelsStayOpen-collapseOne`}
                                    aria-expanded="true"
                                    aria-controls={`panelsStayOpen-collapseOne`}
                                  ></span>
                                </div>
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
                                        <div className="d-flex justify-content-between">
                                          <span
                                            className="text-kh-nav-leftbar"
                                            style={{ padding: "16px 0" }}
                                            onClick={() => {
                                              changeName("Bai 1 trong bai 1");
                                            }}
                                          >
                                            Bai 1 trong bai 1
                                          </span>
                                        </div>
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
            </div>
          )}

          <div className={`side-right-khoa-hoc `}>
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img src={bg40} className="img-kh-cls " alt="..." />
                </div>
                <div className="col-md-8">
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
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={bg40} className="img-kh-cls" alt="..." />
                </div>
                <div className="col-md-8">
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
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card mb-3 border-popse"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={bg40} className="img-kh-cls" alt="..." />
                </div>
                <div className="col-md-8">
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
