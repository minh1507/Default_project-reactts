import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import bg17 from "assets/img/bg17.png";
import bg20 from "assets/img/bg20.jpg";
import bg18 from "assets/img/bg18.jpg";
import bg19 from "assets/img/bg19.jpg";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { Guid } from "common/Enums";
interface Props {}

const ChinhDangChayBo = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [activeTab, setActiveTab] = useState("TatCa");
  useEffect(() => {
    Actions.GetLoaiKhoaHocHoatDongPortal(dispatch);
    Actions.getSuKienPortal(Guid.Empty, dispatch);
  }, [])
  const onChange = (currentNode:any, selectedNodes:any) => {
    console.log('onChange::', currentNode, selectedNodes)
  }
  const onAction = (node:any, action:any) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle =  (currentNode:any) => {
    console.log('onNodeToggle::', currentNode)
  }
  const onChangeTab = (e: any, ie:any) => {
    Actions.getSuKienPortal(e.Id, dispatch);
    setActiveTab(e.Ma);
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img">
        <img className="" src={bg40} width="100%" height="auto" />
        <h1
          className="reszex"
          style={{ whiteSpace: "nowrap", fontSize: "4.6rem" }}
        >
          CHỈNH DÁNG CHẠY BỘ
        </h1>
      </div>
      <div className="container-xl d-flex justify-content-between sk-head mb-3">
          <div className="d-flex">
            <div className="hex4">
              <i className="bi bi-calendar4-week"></i>
            </div>
            <div className="sk-head-middle">
              <h5 className="text-sk-heade-fa text-danger">
                Sự kiện sắp diễn ra
              </h5>
              <h5 className="text-sk-heade-fa">
                Giải chạy bộ quanh hồ tây, gặp gỡ khách mời nổi tiếng
              </h5>
            </div>
            <div className="sk-head-middle text-overrid-head">
              <h5 className="text-sk-heade-fa amc text-danger">
                Diễn ra sau:
              </h5>
              <h5
                className="text-sk-heade-fa amc kamc"
                style={{ marginLeft: "8px" }}
              >
                <span className="change-head-sk-text">2</span> Tháng{" "}
                <span className="change-head-sk-text">20</span> Ngày{" "}
                <span className="change-head-sk-text">12</span> Giờ{" "}
                <span className="change-head-sk-text">22</span> Phút
              </h5>
            </div>
          </div>
          <div className="sk-right-heade">
            <button className="sk-btn-head">Đăng ký ngay</button>
          </div>
        </div>

      {/* <div className="container-xl">
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
      </div>

      <div className="sk-menu-bar">
        <div className="container-xl d-flex gap-3">
          <div className="hex3">
            <i className="bi bi-heart-fill"></i>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="sk-active-ab">Kỹ Thuật</h5>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="sk-unactive-ab">Rèn luyện</h5>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="sk-unactive-ab">Chia sẻ</h5>
          </div>
        </div>
      </div> */}
      <div className="main_sub_detal" style={{ padding: 0 }}>
        <div className="container-xl">
          <div className="row nhom-su-kien mt-3 mb-3">
            <div className="col-sm-12">
              <ul className="nav nav-tabs">
                {
                  state.ItemsNhomSuKien.map((e:any, ie:any) => {
                    return <li className="nav-item" onClick={() => { onChangeTab(e, ie) }}>
                            <a className={"nav-link " + (e.Ma == activeTab ? "active":"")}>{e.Ten}</a>
                          </li>
                  })
                }
              </ul>
            </div>
          </div>
          <div className="row">
            {
              state.ItemsSuKien.map((e:any, ie:any) => {
                return             <div className="col-sm-4">
                <div className="card mb-3 p-0">
                  {/* <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={child.URL_AnhDaiDien as string}
                        style={{
                          width: "100%",
                          height: "200px",
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                        }}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-2">
                        <div className="d-flex justify-content-between">
                          <h6
                            className="card-title titleXl head_z underline-head-tt"
                            onClick={() =>
                              GoToDetailPage(
                                "/chi-tiet-tin-tuc",
                                child.IdSuKien as string,
                                child.TenSuKien as string,
                                "sukien"
                              )
                            }
                            style={{
                              textAlign: "start",
                              width: "250px",
                              fontSize: "1.15rem",
                            }}
                          >
                            {child.TenSuKien}
                          </h6>
                          <span
                            className="d-flex justify-content-center align-items-center chi-tiet"
                            onClick={() =>
                              GoToDetailPage(
                                "/chi-tiet-tin-tuc",
                                child.IdSuKien as string,
                                child.TenSuKien as string,
                                "sukien"
                              )
                            }
                          >
                            Chi tiết
                          </span>
                        </div>
                        <p
                          className="card-text mt-2"
                          style={{
                            fontSize: "0.9rem",
                            textAlign: "start",
                          }}
                        >
                          <i className="bi bi-geo-alt-fill" /> {child.DiaChi}
                        </p>
                        <div
                          className="mt-2"
                          style={{
                            fontSize: "0.9rem",
                            textAlign: "start",
                          }}
                        >
                          <span>
                            <i className="bi bi-calendar-range-fill" />{" "}
                            {child.Date}
                          </span>
                          <span style={{ marginLeft: "20px" }}>
                            <i className="bi bi-clock-fill" /> {child.Time}{" "}
                            {child.Detech}
                          </span>
                        </div>
                        <p
                          className="card-text mt-2 mb-1"
                          style={{
                            fontSize: "0.9rem",
                            textAlign: "start",
                          }}
                        >
                          <i className="bi bi-cash-stack" />{" "}
                          {child.GiaTien ? child.GiaTien : "0"}
                          {" ₫"}
                        </p>

                        {child.TrangThai == 0 ? (
                          <p className="text-danger cursor-pointer">
                            <i className="bi bi-hand-index-fill"></i>{" "}
                            <span style={{ fontWeight: "bold" }}>Đăng ký</span>
                          </p>
                        ) : child.TrangThai == 1 ? (
                          <p>
                            <span>
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={loading}
                              />
                            </span>
                            <span
                              className="text-danger"
                              style={{ fontWeight: "bold" }}
                            >
                              Đang diễn ra
                            </span>

                            <span>
                              <img
                                style={{ width: "30px", height: "30px" }}
                                src={loading}
                              />
                            </span>
                          </p>
                        ) : (
                          <p>
                            <i className="bi bi-x-circle-fill"></i>{" "}
                            <span
                              className="text-dark"
                              style={{ fontWeight: "bold" }}
                            >
                              Đã diễn ra
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              })
            }

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

export default connect(mapState, mapDispatchToProps)(ChinhDangChayBo);
