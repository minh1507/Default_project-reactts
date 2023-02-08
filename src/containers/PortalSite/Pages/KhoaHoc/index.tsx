import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Khoahoc.png";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import TreeMenu from "react-simple-tree-menu";
import "react-simple-tree-menu/dist/main.css";
import { Guid, LabelPortal } from "common/Enums";
import { String } from "common/String";
import ReactPaginate from "react-paginate";
import noimage from "assets/img/noimage.png";
import { useHistory } from "react-router-dom";

const { v4: uuidv4 } = require("uuid");

interface Props {}

const KhoaHoc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [name, setName] = useState("");
  const [accName, setAccName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [reLength, setReLength] = useState(0);
  const kh1 = useRef(null);
  const [itemOffset, setItemOffset] = useState(0);
  const history = useHistory();
  const [theoKhoaHoc, setTheoKhoaHoc] = useState("");
  const pa = useRef(null);
  const pb = useRef(null);
  const nextLength = () => {
    if (reLength + 4 < state.DataHoatDong.length) {
      setReLength(reLength + 4);
    }
  };

  const prevLength = () => {
    if (reLength >= 4) {
      setReLength(reLength - 4);
    }
  };

  const nextKHNB = () => {
    nextLength();
  };

  const prevKHNB = () => {
    prevLength();
  };

  useEffect(() => {
    Actions.GetTreeMonHocPortal(dispatch);
    Actions.GetLoaiKhoaHocHoatDongPortal(dispatch);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  useEffect(() => {
    Actions.GetKhoaHocPortal(itemOffset, itemOffset + 10, Guid.Empty, dispatch);
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

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % state.Count;
    Actions.GetKhoaHocChangePortal(newOffset, newOffset + 10, dispatch);
  };

  const changeName = (name: string) => {
    setName(name);
  };

  const changeSetaccName = (name: string) => {
    setAccName(name);
  };

  const handleLoaiKhoaHoc = (Id: string) => {
    Actions.GetKhoaHocTheoLoaiKhoaHoc(Id, dispatch);
    setAccName("");
    pb.current.state.focusKey = "";
    pb.current.state.activeKey = "";
    state.Count > 0 && (pa.current.state.selected = 0);
  };

  const colorStar = (danhgia: number) => {
    return (
      <span>
        {[...Array(danhgia)].map(() => (
          <span key={uuidv4()}>
            <i className="bi bi-star-fill co-or" aria-hidden="true"></i>
            &nbsp;
          </span>
        ))}
      </span>
    );
  };

  const noColorStar = (danhgia: number) => {
    return (
      <span>
        {[...Array(5 - danhgia)].map(() => (
          <span key={uuidv4()}>
            <i className="bi bi-star co-or" aria-hidden="true"></i>
            &nbsp;
          </span>
        ))}
      </span>
    );
  };

  const GoToDetailPage = (page: string, id: string, search: string) => {
    history.push({
      pathname: page,
      state: { id: id },
      search: `/${search}`,
    });
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img mb-3">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KHÓA HỌC</h1>
      </div>
      {/* {width > 1110 && (
        <h4 className="text-danger text-center tieu-de mb-3">
          Loại khóa học
        </h4>
      )} */}

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
                      onClick={() => {
                        handleLoaiKhoaHoc(value.Id);
                        setTheoKhoaHoc(value.TieuDe);
                      }}
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

        {accName ? (
          <h4 className="text-danger text-center tieu-de mb-3 kh-apeperar">
            {accName}
          </h4>
        ) : (
          <h4 className="text-danger text-center tieu-de mb-3">
            {theoKhoaHoc ? theoKhoaHoc : "Khóa học tổng hợp"}
          </h4>
        )}

        <div className="container-khoa-hoc khoa-hoc-header justify-content-between">
          <div className={`kh-search-bar `}>
            <i className={`bi bi-search i-kh-ab`}></i>
            <input
              placeholder="Tìm kiếm"
              className="kh-input"
              onKeyDown={(e) => {
                if (e.keyCode == 13) {
                  Actions.GetKhoaHocSearch(
                    (e.target as HTMLInputElement).value,
                    dispatch
                  );
                  state.Count > 0 && (pa.current.state.selected = 0);
                }
              }}
            />
          </div>
          <div className="kh-contain-result">
            Tìm thấy <span className="kh-result">{state && state.Count}</span>{" "}
            kết quả
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

        <div className="container-khoa-hoc pb-4">
          {width > 980 && (
            <div className={`side-left-khoa-hoc ji-kh`}>
              <h5 className="kik-kh-kuki">Môn học</h5>
              <TreeMenu
                ref={pb}
                data={state.TreeMonHoc}
                initialOpenNodes={[]}
                hasSearch={false}
                onClickItem={({ key, label, ...props }) => {
                  Actions.GetKhoaHocPortal(
                    itemOffset,
                    itemOffset + 10,
                    key,
                    dispatch
                  );
                  changeSetaccName(label);
                  state.Count > 0 && (pa.current.state.selected = 0);
                }}
              />
            </div>
          )}

          <div className={`side-right-khoa-hoc `}>
            <div className="row">
              {state.DsKhoaHoc &&
                state.DsKhoaHoc.map((e: any, ie: any) => {
                  return (
                    <div key={uuidv4()} className="col-sm-6" style={{paddingRight: 0}}>
                      <div
                        className="card mb-4 border-popse"
                        style={{ maxWidth: "100%" }}
                      >
                        <div className="row g-0">
                          <div className="col-sm-12">
                            <p className="card-title card-title-kh underline-head-tt mb-1"
                                    onClick={() =>
                                      GoToDetailPage(
                                        "/khoa-hoc-chi-tiet",
                                        e.Id as string,
                                        e.TieuDe as string
                                      )
                                    }
                                  >
                              {e.TieuDe}
                            </p>
                          </div>
                        </div>
                        <div className="row g-0">
                          <div className="col-sm-5 try-kh-ui">
                            {e.URL_AnhDaiDien ? (
                              <img
                                src={e.URL_AnhDaiDien}
                                className="img-kh-cls card-image-kh"
                                alt="..."
                              />
                            ) : (
                              <img
                                src={noimage}
                                className="img-kh-cls "
                                alt="..."
                              />
                            )}
                          </div>
                          <div className="col-sm-7">
                            <div className="card-body card-bodys">
                              <div className="row">
                                <div className="col-sm-8">
                                  <p className="card-text popse-khso-p">
                                    <small className="text-muted">
                                      {String.date(e.CreatedDateTime)}
                                    </small>
                                  </p>
                                  <p className="card-text posp-khso text-dark">
                                    {LabelPortal.ThoiHan} <b>{e.ThoiHan}</b> tháng
                                  </p>
                                  {
                                    e.ThoiHanTruyCapMienPhi && e.ThoiHanTruyCapMienPhi !== 0 ?
                                    <p className="card-text posp-khso text-dark">
                                      {LabelPortal.MienPhiTruyCap} <b>{e.ThoiHanTruyCapMienPhi}</b> tháng
                                    </p>:<></>
                                  }
                                  <span className="star-rate">
                                    {colorStar(e.TyLeDanhGia)}
                                    {noColorStar(e.TyLeDanhGia)} (
                                    {e.SoLuongNguoiHoc})
                                  </span>
                                </div>
                                <div className="col-sm-4">
                                  <p className="card-text gia-tien-kh-l marginBottom-5">
                                    <span>{String.num(e.HocPhiGoc)}₫ </span>
                                  </p>
                                  <span className="gia-tien-giam-gias">
                                    {String.num(e.HocPhiGiamGia)}₫
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="d-flex justify-content-center pagi-kh-os align-items-center mt-3">
              {state.Count && Math.ceil(state.Count / 10) > 0 ? (
                <ReactPaginate
                  ref={pa}
                  breakLabel="..."
                  nextLabel="Sau"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={3}
                  pageCount={state.Count && Math.ceil(state.Count / 10)}
                  previousLabel="Trước"
                  className="pagination"
                  initialPage={0}
                />
              ) : (
                <></>
              )}
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
