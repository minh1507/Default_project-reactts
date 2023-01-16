import React, { useEffect, useReducer, useState } from "react";
const { v4: uuidv4 } = require("uuid");
import {
  danhSachSuKien,
  danhSachTintuc,
  IModelGen,
  IModelItem,
  IModelMonHoc,
  IModelMonHocCon,
  IModelSuKien,
} from "./InitState";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { connect } from "react-redux";
import OwlCarousel from "react-owl-carousel";
import banner from "assets/img/banner.jpg";
import sub_banner_left from "assets/img/sub-banner__left.jpg";
import sub_banner_right from "assets/img/sub-banner__right.jpg";
import img1 from "assets/img/img1.jpg";
import img2 from "assets/img/img2.jpg";
import img3 from "assets/img/img3.jpg";
import bg30 from "assets/img/bg30.png";
import bg7 from "assets/img/bg7.png";
import bg8 from "assets/img/bg8.png";
import bg9 from "assets/img/bg9.png";
import bg10 from "assets/img/bg10.png";
import bg11 from "assets/img/bg11.png";
import bg12 from "assets/img/bg12.png";
import bg24 from "assets/img/bg24.png";
import bg25 from "assets/img/bg25.png";
import bg26 from "assets/img/bg26.png";
import bg27 from "assets/img/bg27.png";
import bg28 from "assets/img/bg28.png";
import bg23 from "assets/img/bg23.png";
import bg13 from "assets/img/bg13.png";
import formImg from "assets/img/form-image.jpg";
import loading from "assets/img/trang-chu.gif";

interface Props {}

const TrangChu = (props: Props) => {
  const [count, setCount] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);
  // const [arr, setArr] = useState([img1, img2, img3]);

  useEffect(() => {
    Actions.GetItemTinTuc("1", "3", dispatch);
    Actions.GetItemGiaoan("1", "8", dispatch);
    Actions.GetItemKhoaHoc("1", "8", "4", dispatch);
    Actions.GetItemSuKien("1", "4", dispatch);
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
  const changeImg = (num: number) => {
    setCount(num);
  };

  const gioiThieu = state.DataItemsTinTuc && (
    <div key={uuidv4()} className="main_sub_detal mt-2">
      <div className="container-xl d-flex flex-column">
        <h2 className="text-danger">{state.DataItemsTinTuc.TenNhomTinTuc}</h2>
        <div className="container mt-5">
          <div className="row gap-3 justify-content-center align-items-center">
            {state.DataItemsTinTuc.DanhSachTinTuc.map(
              (child: danhSachTintuc) => (
                <div
                  key={uuidv4()}
                  className="card p-0 card_main_container"
                  style={{
                    maxWidth: "350px",
                    border: "none",
                    cursor: "pointer",
                    minHeight: "580px",
                  }}
                >
                  <img
                    src={child.URL_AnhDaiDien as string}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "200px" }}
                  />
                  <img src={img1} className="card_logo" />
                  <div className="card-body main_sub_bd d-flex flex-column">
                    <h5
                      className="card-title text-danger mt-5"
                      style={{ fontStyle: "italic", padding: "0 2rem" }}
                    >
                      {child.TieuDe}
                    </h5>
                    <p
                      className="card-text mt-3"
                      style={{ textAlign: "justify" }}
                    >
                      {child.MoTa}
                    </p>
                    <div style={{ flexGrow: 1, position: "relative" }}>
                      <button
                        className="header_btn bg-danger text-light"
                        style={{
                          width: "120px",
                          height: "40px",
                          position: "absolute",
                          bottom: 0,
                          left: "28%",
                        }}
                      >
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const giaoan = state.DataItemsGiaoAn && (
    <div className="main_sub_detal mt-2 mb-2">
      <div className="container-xl d-flex flex-column">
        <h2 className="text-danger text-uppercase">
          {state.DataItemsGiaoAn.TenMonHoc}
        </h2>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-4 g-3">
            {state.DataItemsGiaoAn.DanhSachMonHocCon.map(
              (tree: IModelMonHocCon) => (
                <div key={uuidv4()} title="GIÁO ÁN CHỈNH DÁNG" className="col ">
                  <div
                    className="card card_main_container"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={bg7} className="card-img-top" alt="..." />
                    <div
                      className="card-body card_body_override"
                      style={{ textAlign: "start" }}
                    >
                      <h5 className="text-danger card-title head_z">
                        {tree.TenMonHoc}
                      </h5>
                      <p
                        className=" card-text"
                        style={{
                          fontSize: "calc(1rem*.9)",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        Giá dao động: {tree.GiaGiaoDong} VND
                      </p>
                      <p
                        className=" card-text"
                        style={{
                          fontSize: "calc(1rem*.9)",
                          color: "grey",
                          fontWeight: "bold",
                        }}
                      >
                        {tree.MoTa}
                      </p>
                      <div className="d-flex justify-content-center align-items-center">
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
              )
            )}
          </div>
        </div>
        <div className="mt-5">
          <button
            className="header_btn bg-danger text-light "
            style={{ width: "120px" }}
          >
            Xem tất cả
          </button>
        </div>
      </div>
    </div>
  );

  const khoaHoc =
    state.DataItemsKhoaHoc &&
    state.DataItemsKhoaHoc.map((tree: IModelGen) => (
      <div>
        <div className="style17 container-xl"></div>

        <div className="main_sub_detal mt-2 mb-2">
          <div className="container-xl d-flex flex-column">
            <h2 className="text-danger text-uppercase">{tree.TenMonHoc}</h2>
            <div className="container mt-5">
              <div className="row row-cols-1 row-cols-md-4 g-3">
                {tree.DanhSachKhoaHoc.map((item: any) => (
                  <div title="GIÁO ÁN CHỈNH DÁNG" className="col ">
                    <div
                      className="card card_main_container"
                      style={{ cursor: "pointer" }}
                    >
                      <img src={bg7} className="card-img-top" alt="..." />
                      <div className="card-body" style={{ textAlign: "start" }}>
                        <h5 className="text-danger card-title head_z">
                          {item.TieuDe}
                        </h5>
                        <p
                          className=" card-text"
                          style={{
                            fontSize: "calc(1rem*.9)",
                            color: "grey",
                            fontWeight: "bold",
                          }}
                        >
                          Giá dao động: {item.GiaGiaoDong} VND
                        </p>
                        <p
                          className=" card-text"
                          style={{
                            fontSize: "calc(1rem*.9)",
                            color: "grey",
                            fontWeight: "bold",
                          }}
                        >
                          {item.MoTa}
                        </p>
                        <div className="d-flex justify-content-center align-items-center">
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
                ))}
              </div>
            </div>
            <div className="mt-5">
              <button
                className="header_btn bg-danger text-light "
                style={{ width: "120px" }}
              >
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

  const suKien = state.DataItemsSuKien && (
    <div className="main_sub_detal mt-2 mb-2">
      <div className="container-xl d-flex flex-column">
        <h2 className="text-danger">{state.DataItemsSuKien.TenNhomSuKien}</h2>
        <div className="container mt-5">
          <div className="row row-cols-1 row-cols-md-2 gap-3 justify-content-center align-items-center">
            {state.DataItemsSuKien.DanhSachSuKien.map(
              (child: danhSachSuKien) => (
                <div
                  key={uuidv4()}
                  className="card mb-3 p-0"
                  style={{ width: "450px" }}
                >
                  <div className="row g-0" style={{ minHeight: "200px" }}>
                    <div className="col-md-4" style={{ minHeight: "100%" }}>
                      <img
                        src={child.URL_AnhDaiDien as string}
                        style={{ width: "100%", height: "100%" }}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between">
                          <h5
                            className="m-0"
                            style={{
                              textAlign: "start",
                              width: "210px",
                              fontSize: "1.15rem",
                            }}
                          >
                            {child.TenSuKien}
                          </h5>
                          <span
                            className="d-flex justify-content-center align-items-center"
                            style={{
                              cursor: "pointer",
                              backgroundColor: "gray",
                              width: "50px",
                              height: "50px",
                              color: "white",
                              borderRadius: "50%",
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            Chi tiết
                          </span>
                        </div>
                        <p
                          className="card-text mt-2"
                          style={{
                            fontSize: "calc(1rem *.8)",
                            textAlign: "start",
                          }}
                        >
                          <i className="bi bi-geo-alt-fill" /> {child.DiaChi}
                        </p>
                        <div
                          className="mt-2"
                          style={{
                            fontSize: "calc(1rem *.8)",
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
                          className="card-text mt-2 mb-3"
                          style={{
                            fontSize: "calc(1rem *.8)",
                            textAlign: "start",
                          }}
                        >
                          <i className="bi bi-cash-stack" />{" "}
                          {child.GiaTien ? child.GiaTien : "0"}
                          {" VND"}
                        </p>

                        {child.TrangThai == 0 ? (
                          <button
                            className="header_btn bg-danger text-light mt-2"
                            style={{ width: "120px" }}
                          >
                            Đăng ký
                          </button>
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
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main_container" style={{ backgroundColor: "white" }}>
      <div className="banner">
        <img src={banner} className="main_banner" />
        <div className="sub_banner">
          <img src={sub_banner_left} className="sub_banner_bt" />
          <img src={sub_banner_right} className="sub_banner_bt" />
        </div>
      </div>

      {gioiThieu}

      <div className="mt-2 mb-2" style={{ width: "100%", paddingTop: "30px" }}>
        <img src={bg30} style={{ width: "100%", height: "auto" }} />
      </div>

      {giaoan}
      {khoaHoc}

      <div className="style17 container-xl"></div>

      {suKien}

      <div className="banner_2nd mt-2 mb-2">
        <img src={bg8} className="main_banner" />
        <div className="sub_banner">
          <img src={bg9} className="sub_banner_bt_2nd" />
          <img src={bg10} className="sub_banner_bt_2nd" />
          <img src={bg11} className="sub_banner_bt_2nd" />
        </div>
      </div>

      <div className="banner_2nd d-flex justify-content-center align-items-center mt-5 mb-2">
        <img src={bg12} style={{ width: "70vw", height: "auto" }} />
      </div>

      <div className="main_sub_detal mt-2 mb-2">
        <div className="container-xl d-flex flex-column">
          <h2 className="text-danger">THÀNH TÍCH HỌC VIÊN</h2>
          <div
            className="container mt-5 d-flex justify-content-between congrate"
            style={{ textAlign: "start" }}
          >
            <div className="congrate_child" style={{ width: "40%" }}>
              <div
                id="congrate"
                onClick={() => {
                  changeImg(1);
                }}
                className={`p1 d-flex ${
                  count == 1 ? "personImg" : "unPersonImg"
                }`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={bg24}
                  style={{
                    borderRadius: "5px 5px",
                    width: "auto",
                    height: "auto",
                  }}
                />
                <span className="p-4">
                  <p style={{ fontWeight: "bold" }}>Nghiêm Hải Long Vương</p>
                  <small className="text-danger">Thành tích</small>
                </span>
              </div>
              <div
                id="congrate"
                onClick={() => {
                  changeImg(2);
                }}
                className={`p1 d-flex ${
                  count == 2 ? "personImg" : "unPersonImg"
                }`}
                style={{ cursor: "pointer" }}
              >
                <img src={bg25} style={{ borderRadius: "5px 5px" }} />
                <span className="p-4">
                  <p style={{ fontWeight: "bold" }}>Nguyễn Minh Thiện</p>
                  <small className="text-danger">Thành tích</small>
                </span>
              </div>
              <div
                id="congrate"
                onClick={() => {
                  changeImg(3);
                }}
                className={`p1 d-flex ${
                  count == 3 ? "personImg" : "unPersonImg"
                }`}
                style={{ cursor: "pointer" }}
              >
                <img src={bg26} style={{ borderRadius: "5px 5px" }} />
                <span className="p-4">
                  <p style={{ fontWeight: "bold" }}>Nguyễn Thị Huỳnh Như</p>
                  <small className="text-danger">Thành tích</small>
                </span>
              </div>
              <div
                id="congrate"
                onClick={() => {
                  changeImg(4);
                }}
                className={`p1 d-flex ${
                  count == 4 ? "personImg" : "unPersonImg"
                }`}
                style={{ cursor: "pointer" }}
              >
                <img src={bg27} style={{ borderRadius: "5px 5px" }} />
                <span className="p-4">
                  <p style={{ fontWeight: "bold" }}>Hoàng Ngọc Mai</p>
                  <small className="text-danger">Thành tích</small>
                </span>
              </div>
              <div
                id="congrate"
                onClick={() => {
                  changeImg(5);
                }}
                className={`p1 d-flex ${
                  count == 5 ? "personImg" : "unPersonImg"
                }`}
                style={{ cursor: "pointer" }}
              >
                <img src={bg28} style={{ borderRadius: "5px 5px" }} />
                <span className="p-4">
                  <p style={{ fontWeight: "bold" }}>Đặng Thị Quỳnh</p>
                  <small className="text-danger">Thành tích</small>
                </span>
              </div>
            </div>
            <div
              id="congrate_child_before"
              style={{ width: "55%", position: "relative" }}
            >
              <img src={bg23} style={{ height: "auto", width: "70%" }} />
              <div id="congrate_child_after" className="congrate_child_after">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, fugit accusantium. Vitae alias inventore odit saepe
                  reiciendis quas eligendi nisi exercitationem eveniet, quod
                  eius sequi, blanditiis enim deserunt eum praesentium. runt eum
                  praesentium. runt eum praesentium. runt eum praesentium. runt
                  eum praesentium. runt eum praesentium. runt eum praesentium.
                </p>
                <div
                  className="mt-2"
                  style={{ borderBottom: "1px solid salmon", width: "40%" }}
                />
                <div className="mt-2">
                  <p style={{ fontWeight: "bold" }}>Tên học viên</p>
                  <p
                    style={{ fontSize: "calc(1rem * .8)" }}
                    className="text-danger"
                  >
                    Thành tích
                  </p>
                  <p
                    style={{ fontSize: "calc(1rem * .8)" }}
                    className="text-muted"
                  >
                    Khóa học đã đăng kí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-5">
        <h2 className="text-danger text-center">BLOG CHIA SẺ KIẾN THỨC</h2>

        <OwlCarousel
          className="owl-theme mt-4"
          autoplay
          loop
          nav
          center
          items={4}
          responsive={responsive}
        >
          <div
            className="item card_carosel"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
            className="item card_carosel"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div>
              <img src={bg13} />
              <div
                className="text-center text-light "
                style={{ padding: "0 20px" }}
              >
                <h5 className="mt-1 fst-italic">CHẠY BỘ CẦN KỸ NĂNG GÌ</h5>
                <p className="owl_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  at est felis. Praesent eu pellentesque nisl, in vulputate
                  tellus. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.{" "}
                </p>
                <div className="d-flex justify-content-center align-items-center">
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
        </OwlCarousel>
      </div>

      <div
        className="main_sub_detal mt-5"
        style={{ padding: "10px 0 30px 0 " }}
      >
        <div
          id="constate_before"
          className="container-xl d-flex justify-content-between"
        >
          <div id="constate_after_img" style={{ width: "40%" }}>
            <img src={formImg} style={{ width: "100%", height: "auto" }} />
          </div>
          <div id="constate_after" style={{ width: "55%", textAlign: "start" }}>
            <h2 className="text-danger">ĐĂNG KÍ TƯ VẤN MIỄN PHÍ</h2>
            <div className="input-group flex-nowrap mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Họ và Tên"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <p className="mt-3" style={{ fontWeight: "bold" }}>
              Giới tính
            </p>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="gender1"
                defaultValue="option1"
              />
              <label className="form-check-label" htmlFor="gender1">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="gender2"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="gender2">
                Nữ
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="gender3"
                defaultValue="option2"
              />
              <label className="form-check-label" htmlFor="gender3">
                Khác
              </label>
            </div>
            <div className="input-group flex-nowrap mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
                aria-label="PhoneNumber"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="input-group flex-nowrap mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div className="mt-3">
              <textarea
                className="form-control"
                rows={3}
                placeholder="Đóng góp cho học viện ...."
                defaultValue={""}
              />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                className="header_btn bg-danger text-light mt-3"
                style={{ width: "120px" }}
              >
                Gửi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(TrangChu);
