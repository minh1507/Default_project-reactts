import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Khoahoc.png";
import MainCard from "../General/MainCard";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import bt1 from "assets/img/bt1.jpeg";
import bt2 from "assets/img/bt2.jpeg";
import bt3 from "assets/img/bt3.jpeg";
import bt4 from "assets/img/bt4.jpg";
const { v4: uuidv4 } = require("uuid");

interface Props {}

const KhoaHoc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [name, setName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [reLength, setReLength] = useState(1);
  const kh1 = useRef(null);
  const [anh, setAnh] = useState([
    { name: bt1 },
    { name: bt2 },
    { name: bt3 },
    { name: bt4 },
    { name: bt3 },
    { name: bt2 },
    { name: bt1 },
    { name: bt2 },
    { name: bt3 },
    { name: bt4 },
  ]);

  const nextLength = () => {
    if (reLength < state.DataHoatDong.length - 2) {
      setReLength(reLength + 1);
    }
  };
  console.log(reLength);

  const prevLength = () => {
    if (reLength > 1) {
      setReLength(reLength - 1);
    }
  };

  const random = (index: any) => {
    if (index > 10) {
      let i = Math.floor(index / 10);
      return String(anh[index].name);
    }
    let data = Math.floor(Math.random() * anh.length);
    return String(anh[index].name);
  };

  const nextKHNB = () => {
    nextLength();
  };

  const prevKHNB = () => {
    prevLength();
  };

  useEffect(() => {
    Actions.GetMonHocPortal("GA1", "20", dispatch);
    Actions.GetHoatDongPortal(dispatch);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    if (width > 1110 && kh1.current.children.length > 0) {
      kh1.current.children[reLength].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [reLength]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = kh1.current.offsetLeft;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const changeName = (name: string) => {
    setName(name);
  };

  // console.log(scrollPosition);
  console.log(kh1);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img mb-3">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KHÓA HỌC</h1>
      </div>

      <h4 className="text-danger text-center text-uppercase tieu-de mb-3">
        Loại khóa học
      </h4>

      <div className="container-xl ">
        {width > 1110 && (
          <div className="kh-sl-ca1">
            <div className="gv-kh mb-4" ref={kh1}>
              {state.DataHoatDong &&
                state.DataHoatDong.map((value: any, index: any) => {
                  return (
                    <div
                      key={uuidv4()}
                      className="slide-child"
                      style={{ backgroundImage: `url(${random(index)})` }}
                    >
                      <div className="slide-element">{value.TieuDe}</div>
                    </div>
                  );
                })}
            </div>
            <p className="nextKHNB" onClick={nextKHNB}>
              <i className="bi bi-arrow-right-circle-fill"></i>
            </p>

            <p className="prevKHNB" onClick={prevKHNB}>
              <i className="bi bi-arrow-left-circle-fill"></i>
            </p>
          </div>
        )}

        {/* <img className="mb-4 kh-cdnb1x" src={ba1} width="100%" height="auto" /> */}

        {name ? (
          <h4 className="text-danger text-center text-uppercase tieu-de mb-3 kh-apeperar">
            {name}
          </h4>
        ) : (
          <h4 className="text-danger text-center text-uppercase tieu-de mb-3">
            Danh sách khóa học
          </h4>
        )}

        <div className="container-khoa-hoc khoa-hoc-header justify-content-between">
          <div className={`kh-search-bar `}>
            <i className={`bi bi-search i-kh-ab`}></i>
            <input placeholder="Tìm kiếm" className="kh-input" />
          </div>
          <div className="kh-contain-result">
            Tìm thấy <span className="kh-result">10</span> kết quả
          </div>
        </div>

        {width <= 980 && (
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

        {width <= 980 && (
          <div
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Danh sách môn học
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
            <div className={`side-left-khoa-hoc ji-kh`}>
              <h5 className="kik-kh-kuki">Môn học</h5>
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {state.DataItem &&
                  state.DataItem.DanhSachMonHocCon.map((value: Item) => (
                    <div key={uuidv4()} className="accordion-item pim">
                      <h2
                        className="accordion-header"
                        id={`heading${value.Id}`}
                      >
                        <div className="d-flex justify-content-between">
                          <span
                            className="text-kh-nav-leftbar"
                            onClick={() => {
                              changeName(value.TenMonHoc as string);
                            }}
                            style={{
                              color: `${
                                value.TenMonHoc == name ? "#dd3645" : "black"
                              }`,
                            }}
                          >
                            {value.TenMonHoc}
                          </span>
                          <span
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${value.Id}`}
                            aria-expanded="false"
                            aria-controls={`collapse${value.Id}`}
                          ></span>
                        </div>
                      </h2>
                      <div
                        id={`collapse${value.Id}`}
                        className="accordion-collapse collapse"
                        // aria-labelledby={`heading${value.Id}`}
                        aria-labelledby={`heading${value.Id}`}
                        data-bs-parent="#accordionExample"
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
                                    className="accordion-button collapsed"
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
                <div className="col-md-3 try-kh-ui">
                  <img src={bg40} className="img-kh-cls " alt="..." />
                </div>
                <div className="col-md-9">
                  <div className="card-body card-bodys">
                    <div className="row">
                      <div className="col-md-10">
                        <h5 className="card-title">Tên khóa học</h5>
                        <p className="card-text popse-khso-p">
                          <small className="text-muted">
                            20/12/2023 8:00 Tối
                          </small>
                        </p>
                        <p className="card-text posp-khso text-dark">
                          Giảng viên: Coach Lê Quang
                        </p>
                        <span className="star-rate">
                          <i
                            className="bi bi-star-fill co-or"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            className="bi bi-star-fill co-or"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            className="bi bi-star co-or"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            className="bi bi-star co-or"
                            aria-hidden="true"
                          ></i>
                          &nbsp;
                          <i
                            className="bi bi-star co-or"
                            aria-hidden="true"
                          ></i>
                          &nbsp; (45)
                        </span>
                        <p className="card-text posp-khso mb-1">
                          Mo ta Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Vel perferendis nostrum odio maxime
                          delectus beatae, maiores, nulla placeat omnis ea
                          accusantium possimus quam ratione.
                        </p>
                      </div>
                      <div className="col-md-2">
                        <p className="card-text gia-tien-kh-l">
                          <span>2.000.000₫ </span>
                        </p>
                        <span className="gia-tien-giam-gias">1.000.000₫</span>
                      </div>
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
