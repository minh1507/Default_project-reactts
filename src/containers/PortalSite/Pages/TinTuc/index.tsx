import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import Comment from "../General/comment";
import bg7 from "assets/img/bg7.png";
import { useLocation } from "react-router-dom";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { String } from "common/String";

interface Props {}

const ChiTiet = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const location = useLocation();

  useEffect(() => {
    if (location.state.type == "tintuc") {
      Actions.GetDetailTinTuc(location.state.id, dispatch);
    }
    if (location.state.type == "sukien") {
      Actions.GetDetailSuKien(location.state.id, dispatch);
    }
  }, []);

  console.log(state.DataDetailSuKien);

  return (
    <div>
      {location.state.type == "tintuc" && (
        <div id="main_newss_fat" style={{ backgroundColor: "#eeeeee" }}>
          <div className="container main_newss d-dex-f mt-3">
            <p
              className="mb-2"
              style={{
                fontSize: "calc(1rem * 0.8)",
                color: "gray",
              }}
            >
              {String.date(state.DataDetail.NgayXuatBan)} |{" "}
              {state.DataDetail.LuotXem} Lượt xem
            </p>
            <h3 className="text-uppercase" style={{ fontWeight: "bold" }}>
              {state.DataDetail.TieuDe}
            </h3>
            <p className="mb-3">
              Tác giả: <span>{state.DataDetail.TacGia}</span>
            </p>

            <img
              className="mb-3"
              src={state.DataDetail.URL_AnhDaiDien}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "2.5px 2.5px",
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html: `<p className="mb-3" style={{ textAlign: "justify" }}>
            ${state.DataDetail.NoiDung}
          </p>`,
              }}
            ></div>
          </div>
        </div>
      )}

      {location.state.type == "sukien" && (
        <div id="main_newss_fat" style={{ backgroundColor: "#eeeeee" }}>
          <div className="container main_newss d-dex-f mt-3">
            <p
              className="mb-2"
              style={{
                fontSize: "calc(1rem * 0.8)",
                color: "gray",
              }}
            >
              {String.date(state.DataDetailSuKien.ThoiGian)} |{" "}
              {state.DataDetailSuKien.LuotXem} Lượt xem
            </p>
            <h3 className="text-uppercase" style={{ fontWeight: "bold" }}>
              {state.DataDetail.TieuDe}
            </h3>
            <img
              className="mb-3"
              src={state.DataDetailSuKien.URL_AnhDaiDien}
              style={{
                width: "300px",
                height: "auto",
                borderRadius: "2.5px 2.5px",
              }}
            />

            <div
              dangerouslySetInnerHTML={{
                __html: `<p className="mb-3" style={{ textAlign: "justify" }}>
            ${state.DataDetailSuKien.NoiDung}
          </p>`,
              }}
            ></div>
          </div>
        </div>
      )}

      <div
        className="pb-5"
        id="main_newss_fat mt-5"
        style={{ backgroundColor: "#eeeeee", padding: "10px 10px" }}
      >
        <div
          className="container-xl main_newss_3nd"
          style={{ maxWidth: "600px" }}
        >
          <h3
            className="mb-5"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            BÌNH LUẬN
          </h3>
          <div className="d-flex">
            <div
              style={{
                backgroundColor: "gray",
                height: "40px",
                width: "40px",
                borderRadius: "50%",
              }}
            />
            <div
              className="input-group flex-nowrap"
              style={{ marginLeft: "10px" }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Viết bình luận"
                aria-label="Comment"
                aria-describedby="addon-wrapping"
              />
            </div>
          </div>
          <Comment tital="ok" />
        </div>
      </div>

      <div
        className="pb-5"
        id="main_newss_fat"
        style={{ backgroundColor: "#eeeeee" }}
      >
        <div
          className="container main_newss_3nd"
          style={{ backgroundColor: "white" }}
        >
          <h3
            className="mb-5 mt-3 text-uppercase"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Tin tức liên quan
          </h3>
          <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center mb-5">
            <div className="col " style={{ minWidth: "200px" }}>
              <div
                className="card card_main_container"
                style={{ cursor: "pointer" }}
              >
                <img src={bg7} className="card-img-top" alt="..." />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    25/12/2022 at 8pm
                  </p>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Mr Long
                  </p>
                  <button
                    className="header_btn bg-danger text-light mt-3"
                    style={{ width: "120px" }}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            <div className="col " style={{ minWidth: "200px" }}>
              <div
                className="card card_main_container"
                style={{ cursor: "pointer" }}
              >
                <img src={bg7} className="card-img-top" alt="..." />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    25/12/2022 at 8pm
                  </p>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Mr Long
                  </p>
                  <button
                    className="header_btn bg-danger text-light mt-3"
                    style={{ width: "120px" }}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            <div className="col " style={{ minWidth: "200px" }}>
              <div
                className="card card_main_container"
                style={{ cursor: "pointer" }}
              >
                <img src={bg7} className="card-img-top" alt="..." />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    25/12/2022 at 8pm
                  </p>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Mr Long
                  </p>
                  <button
                    className="header_btn bg-danger text-light mt-3"
                    style={{ width: "120px" }}
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
            <div className="col " style={{ minWidth: "200px" }}>
              <div
                className="card card_main_container"
                style={{ cursor: "pointer" }}
              >
                <img src={bg7} className="card-img-top" alt="..." />
                <div className="card-body" style={{ textAlign: "start" }}>
                  <h5 className="text-danger card-title">GIÁO ÁN CHỈNH DÁNG</h5>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    25/12/2022 at 8pm
                  </p>
                  <p
                    className=" card-text"
                    style={{
                      fontSize: "calc(1rem*.9)",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  >
                    Mr Long
                  </p>
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

export default connect(mapState, mapDispatchToProps)(ChiTiet);
