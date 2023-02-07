import React, { useState, useReducer, useEffect, useRef } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import TreeMenu from "react-simple-tree-menu";
import { Guid } from "common/Enums";
import { String } from "common/String";
import ReactPaginate from "react-paginate";
const { v4: uuidv4 } = require("uuid");
import noimage from "assets/img/noimage.png";
import { useHistory } from "react-router-dom";

interface Props {}

const KienThuc = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const history = useHistory();
  const [width, setWidth] = useState(window.innerWidth);
  const [accName, setAccName] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const pa = useRef(null);
  const changeSetaccName = (name: string) => {
    setAccName(name);
  };
  useEffect(() => {
    Actions.GetTreeMonHocPortal(dispatch);
    Actions.GetTinTucPortal(0, 10, Guid.Empty, dispatch);
    Actions.GetTinTucNoiBatPortal(dispatch);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  const responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  };

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * 10) % state.Count;
    Actions.GetTinTucPortalChange(newOffset, newOffset + 10, dispatch);
  };

  const GoToDetailPage = (
    page: string,
    id: string,
    search: string,
    type: string
  ) => {
    history.push({
      pathname: page,
      state: { id: id, type: type },
      search: `/${search}`,
    });
    window.scrollTo(0, 0);
  };

  const TinTucNoiBatRender = () => {
    let elementLeft: any = [];
    let elementRight: any = [];
    for (let i = 0; i < state.DataItemTinTucNoiBat.length; i++) {
      if (i == 0) {
        elementLeft.push(
          <div key={uuidv4()}>
            {state.DataItemTinTucNoiBat[i].URL_AnhDaiDien ? (
              <img
                src={state.DataItemTinTucNoiBat[i].URL_AnhDaiDien}
                className="img-head-left"
              />
            ) : (
              <img src={noimage} className="img-head-left" />
            )}
            <div className="full-kt-box">
              <h5
                className="underline-head-tt"
                onClick={() =>
                  GoToDetailPage(
                    "/chi-tiet-tin-tuc",
                    state.DataItemTinTucNoiBat[i].Id as string,
                    state.DataItemTinTucNoiBat[i].TieuDe as string,
                    "tintuc"
                  )
                }
              >
                {state.DataItemTinTucNoiBat[i].TieuDe}
                <p className="card-text  mt-1">
                  <small className="text-muted">
                    {String.date(state.DataItemTinTucNoiBat[i].NgayXuatBan)}
                  </small>
                </p>
              </h5>
              <p style={{ wordBreak: "break-word" }}>
                {state.DataItemTinTucNoiBat[i].MoTa}
              </p>
            </div>
          </div>
        );
      } else if (i >= 1 && i <= 4) {
        elementRight.push(
          <div key={uuidv4()} className="subnews-head-right">
            <div className="img-head-righta">
              {state.DataItemTinTucNoiBat[i].URL_AnhDaiDien ? (
                <img
                  src={state.DataItemTinTucNoiBat[i].URL_AnhDaiDien}
                  className="img-head-right"
                />
              ) : (
                <img src={noimage} className="img-head-right" />
              )}
              <h5 className="img-head-rightab text-center cursor-pointer">
                <i className="bi bi-eye"></i>
              </h5>
            </div>
            <div className="img-head-lefta">
              <p
                className="sub-news-noitbat underline-head-tt"
                onClick={() =>
                  GoToDetailPage(
                    "/chi-tiet-tin-tuc",
                    state.DataItemTinTucNoiBat[i].Id as string,
                    state.DataItemTinTucNoiBat[i].TieuDe as string,
                    "tintuc"
                  )
                }
              >
                {state.DataItemTinTucNoiBat[i].TieuDe}
              </p>
              <p className="card-text  mt-1">
                <small className="text-muted">
                  {String.date(state.DataItemTinTucNoiBat[i].NgayXuatBan)}
                </small>
              </p>
            </div>
          </div>
        );
      }
    }
    return (
      <>
        <div className="kt-head-left kop-ata-kh-left">{elementLeft}</div>
        <div className="kt-head-right ">{elementRight}</div>
      </>
    );
  };
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-xl pb-3">
        <div className="d-flex kt-contain-main mt-3">
          <div className="kt-left-contain dra-left-kti">
            {width && width > 768 && (
              <div className="kt-contain-head mb-3">{TinTucNoiBatRender()}</div>
            )}
            {accName ? (
              <h4 className="text-danger text-center tieu-de mb-3 kh-apeperar">
                Chuyên mục tin - {accName}
              </h4>
            ) : (
              <h4 className="text-danger text-center tieu-de mb-3">
                Chuyên mục tin mới cập nhật
              </h4>
            )}
            {state.DataItemTinTuc.map((e: any, ie: any) => {
              return (
                <div
                  key={uuidv4()}
                  className="card border-popse mb-3 ml-1 mg-left-15 mg-right-15"
                  style={{ maxWidth: "100%" }}
                >
                  <div className="row g-0">
                    <div className="col-md-4 ">
                      {e.URL_AnhDaiDien ? (
                        <img
                          src={e.URL_AnhDaiDien}
                          className="img-kh-cls "
                          alt="..."
                        />
                      ) : (
                        <img src={noimage} className="img-kh-cls " alt="..." />
                      )}
                    </div>
                    <div className="col-md-8">
                      <div className="card-body card-bodys">
                        <h5
                          className="card-title underline-head-tt"
                          onClick={() =>
                            GoToDetailPage(
                              "/chi-tiet-tin-tuc",
                              e.Id as string,
                              e.TieuDe as string,
                              "tintuc"
                            )
                          }
                        >
                          {e.TieuDe}
                        </h5>
                        <p className="card-text  mt-1">
                          <small className="text-muted">
                            {String.date(e.NgayXuatBan)}
                          </small>
                        </p>
                        <p className="card-text posp-khso">{e.MoTa}</p>
                        <div className="underline-news"></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
          {width && width > 961 && (
            <div className="kt-right-contain d-flex flex-column gap-2">
              <div className="img-contain-right-box-class">
                <div
                  className={`side-left-khoa-hoc ji-kh rout-kba-dun flex-column`}
                >
                  <h5
                    className="kik-kh-kuki text-uppercase kt-su-aba"
                    style={{ fontSize: "1.2rem", margin: 0 }}
                  >
                    Chuyên mục
                  </h5>
                  <div className="mt-3 mb-3 crossline"></div>
                  <TreeMenu
                    data={state.TreeChuyenMuc}
                    initialOpenNodes={[]}
                    hasSearch={false}
                    onClickItem={({ key, label, ...props }) => {
                      Actions.GetTinTucPortal(0, 10, key, dispatch);
                      changeSetaccName(label);
                      state.Count > 0 && (pa.current.state.selected = 0);
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
