import React, { useEffect, useReducer, useRef, useState } from "react";
const { v4: uuidv4 } = require("uuid");
import { useHistory } from "react-router-dom";
import {
  danhSachSuKien,
  danhSachTintuc,
  IModelGen,
  IModelMonHocCon,
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
import formImg from "assets/img/form-image.jpg";
import loading from "assets/img/trang-chu.gif";
import { LabelPortal, Message } from "common/Enums";
import CNotification from "components/CNotification";
import TuVanService from "services/TuVanService";
import { IResponseMessage, IUserInfo } from "common/Models";
import { String } from "common/String";
import { Storage } from "common/Storage";

interface Props {}

const TrangChu = (props: Props) => {
  const history = useHistory();
  const [count, setCount] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [tuVan, setTuVan] = useState({
    Ten: "",
    GioiTinh: "",
    Sdt: "",
    Email: "",
    NoiDung: "",
  });
  const refNotification = useRef<any>();
  let userInfo: IUserInfo = JSON.parse(Storage.getSession("UserInfo"));

  const onChangeFormTuVan = (key: string, e: any) => {
    setTuVan({
      ...tuVan,
      [key]: e,
    });
  };

  const ValidateFormTuVan = () => {
    if (!tuVan.Email) {
      refNotification.current.showNotification("warning", Message.TuVan_Wrong);
      return false;
    }
    if (!tuVan.GioiTinh) {
      refNotification.current.showNotification("warning", Message.TuVan_Wrong);
      return false;
    }
    if (!tuVan.NoiDung) {
      refNotification.current.showNotification("warning", Message.TuVan_Wrong);

      return false;
    }
    if (!tuVan.Sdt) {
      refNotification.current.showNotification("warning", Message.TuVan_Wrong);
      return false;
    }
    if (!tuVan.Ten) {
      refNotification.current.showNotification("warning", Message.TuVan_Wrong);
      return false;
    }
    return true;
  };

  const sendTuVan = async () => {
    if (ValidateFormTuVan()) {
      let res: IResponseMessage = await TuVanService.CreateItem(tuVan);
      if (res && res.Success) {
        refNotification.current.showNotification("success", res.Message);
        setTuVan({ Email: "", GioiTinh: "", NoiDung: "", Sdt: "", Ten: "" });
        document.querySelectorAll("input").forEach((item: any) => {
          item.value = "";
        });
        document.querySelector("textarea").value = "";
      }
    }
  };

  const GoToOtherPage = (page: string) => {
    history.push(page);
    window.scrollTo(0, 0);
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

  useEffect(() => {
    Actions.GetItemGioiThieu([img1, img2, img3], dispatch);
    Actions.GetItemBlog(dispatch);
    Actions.GetItemGiaoan(dispatch);
    Actions.GetItemKhoaHoc(dispatch);
    Actions.GetSuKien(dispatch);
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

  const gioiThieu = state.DataItemsGioiThieu && (
    <div key={uuidv4()} className="main_sub_detal rout-zx mt-2">
      <div className="container-xl d-flex flex-column">
        <h4 className="text-danger tieu-de text-uppercase">
          {state.DataItemsGioiThieu.TenNhomGioiThieu}
        </h4>
        <div className="container-xl mt-3">
          <div className="row gap-3 justify-content-center align-items-center">
            {state.DataItemsGioiThieu.DanhSachGioiThieu.map(
              (child: danhSachTintuc) => (
                <div
                  key={uuidv4()}
                  className="card p-0 card_main_container wrapper_d"
                  style={{
                    maxWidth: "350px"
                  }}
                >
                  <div className="wrapper_discard">
                    <img
                      src={child.URL_AnhDaiDien as string}
                      className="card-img-top imov"
                      alt="..."
                    />
                  </div>

                  <img src={child.Img as string} className="card_logo" />
                  <div className="card-body main_sub_bd d-flex flex-column">
                    <h6
                      className="card-title mt-4 mb-2 underline-head-tt"
                      style={{ fontStyle: "italic" }}
                      onClick={() =>
                        GoToDetailPage(
                          "/chi-tiet-tin-tuc",
                          child.Id as string,
                          child.TieuDe as string,
                          "tintuc"
                        )
                      }
                    >
                      {child.TieuDe}
                    </h6>
                    <p
                      className="card-text gioiThieuPortal"
                      style={{ textAlign: "justify" }}
                    >
                      {child.MoTa}
                    </p>
                    <div style={{ flexGrow: 1, position: "relative" }}>
                      <button
                        className="header_btn bg-danger text-light"
                        onClick={() =>
                          GoToDetailPage(
                            "/chi-tiet-tin-tuc",
                            child.Id as string,
                            child.TieuDe as string,
                            "tintuc"
                          )
                        }
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
    <div className="main_sub_detal rout-zxz mt-2 mb-2 ">
      <div className="container-xl d-flex flex-column">
        <h4 className="text-danger tieu-de">
          {state.DataItemsGiaoAn.TenTieuDe}
        </h4>
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-4 g-3 kt-round-dudat d-flex justify-content-center">
            {state.DataItemsGiaoAn.DanhSachMonHocCon.map(
              (tree: IModelMonHocCon) => (
                <div
                  key={uuidv4()}
                  title={`${tree.TieuDe}`}
                  className="col change-tt-aba"
                >
                  <div
                    className="card card_main_container  wrapper_c"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="wrapper_card">
                      <img
                        src={tree.URL_AnhDaiDien as string}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>

                    <div
                      className="card-body card_body_override card-bodys"
                      style={{ textAlign: "start" }}
                    >
                      <p
                        className="card-title underline-head-tt text-uppercase"
                        onClick={() => GoToOtherPage("/khoa-hoc")}
                      >
                        {tree.TieuDe}
                      </p>
                      <p className="money">
                        {String.num(tree.GiaGiaoDongTu)}₫ -{" "}
                        {String.num(tree.GiaGiaoDongDen)}₫
                      </p>
                      <p className=" card-text text-dark mo-ta mb-1">
                        {tree.MoTa}
                      </p>

                      {/* <div className="boxC">
                        <button
                          className="header_btn bg-danger text-light"
                          onClick={() => GoToOtherPage("/khoa-hoc")}
                        >
                          Xem chi tiết
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* <div className="mt-5">
          <button
            className="header_btn bg-danger text-light "
            onClick={() => {
              GoToOtherPage("/khoa-hoc");
            }}
          >
            Xem tất cả
          </button>
        </div> */}
      </div>
    </div>
  );

  const khoaHoc =
    state.DataItemsKhoaHoc &&
    state.DataItemsKhoaHoc.map((tree: IModelGen) => (
      <div key={uuidv4()}>
        {tree.DanhSachKhoaHoc.length > 0 && (
          <div>
            <div className="style17 container-xl"></div>

            <div className="main_sub_detal tieu-de-ava pt-0 mb-2">
              <div className="container d-flex flex-column">
                <h4 className="text-danger tieu-de tieude-avb ">
                  {tree.TenMonHoc}
                </h4>
                <div className="container uoy-tt mt-1">
                  <div className="row row-cols-1 row-cols-md-4 g-3 kt-round-dudat">
                    {tree.DanhSachKhoaHoc.map((item: any) => (
                      <div
                        key={uuidv4()}
                        title={`${item.TieuDe}`}
                        className="col-sm-4 change-tt-aba"
                      >
                        <div
                          className="card card_main_container wrapper_c"
                        >
                          <div className="wrapper_card">
                            <img
                              src={item.URL_AnhDaiDien}
                              className="card-img-top"
                              alt="..."
                            />
                          </div>

                          <div
                            className="card-body card-bodys"
                            style={{
                              textAlign: "start",
                            }}
                          >
                            <p
                              className="card-title  underline-head-tt"
                              onClick={() =>
                                GoToDetailPage(
                                  "/khoa-hoc-chi-tiet",
                                  item.Id as string,
                                  item.TieuDe as string,
                                  "khoahoc"
                                )
                              }
                            >
                              {item.TieuDe}
                            </p>
                            <p className=" card-text">
                              {LabelPortal.ThoiHan} <b>{item.ThoiHan}</b> tháng
                            </p>
                            {item.ThoiHanTruyCapMienPhi && item.ThoiHanTruyCapMienPhi !== 0 ? (
                              <p className=" card-text">
                                {LabelPortal.MienPhiTruyCap} <b>{item.ThoiHanTruyCapMienPhi}</b> tháng
                              </p>
                            ) : (
                              <></>
                            )}
                            <p className="mb-1 mt-1">
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
                            </p>
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
                                  fontSize: "calc(1rem * 1.1)",
                                  color: "red",
                                }}
                              >
                                {item.HocPhiGoc != 0 ? (
                                  <span>
                                    {item.HocPhiGoc > item.HocPhiGiamGia ? (
                                      <span>{String.num(item.HocPhiGiamGia)}</span>
                                    ) : (
                                      <span>
                                        {String.num(item.HocPhiGoc)}
                                      </span>
                                    )}
                                  </span>
                                ) : (
                                  <span className={`decrease`}>Miễn phí</span>
                                )}
                              </span>
                              {item.HocPhiGiamGia <= item.HocPhiGoc &&
                                item.HocPhiGoc != 0 && (
                                  <span
                                    style={{
                                      fontSize: "calc(1rem * 1.1)",
                                      color: "red",
                                    }}
                                  >
                                    ₫
                                  </span>
                                )}
                              {item.HocPhiGiamGia < item.HocPhiGoc &&
                                item.HocPhiGoc != 0 &&
                                item.HocPhiGiamGia != 0 && (
                                  <span
                                    style={{
                                      marginLeft: "8px",
                                      color: "gray",
                                      fontWeight: "300",
                                      textDecoration: "line-through",
                                    }}
                                  >
                                    {String.num(item.HocPhiGoc)}₫
                                  </span>
                                )}
                            </p>
                            {/* <div className="d-flex justify-content-center align-items-center mb-1 btn-khhoc">
                              <button
                                className="header_btn bg-danger text-light mt-3"
                                onClick={() =>
                                  GoToDetailPage(
                                    "/khoa-hoc-chi-tiet",
                                    item.Id as string,
                                    item.TieuDe as string
                                  )
                                }
                              >
                                Xem chi tiết
                              </button>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ));

  const suKien = state.DataItemsSuKien && state.DataItemsSuKien.DanhSachSuKien.length > 0 && (
    <div className="main_sub_detal rout-zxa mb-2">
      <div className="container-xl d-flex flex-column">
        <h4 className="text-danger tieu-de">
          {/* {state.DataItemsSuKien && state.DataItemsSuKien[0].NhomSuKien} */}
          Sự kiện mới nhất
        </h4>
        <div className="container mt-3">
          <div className="row row-cols-1 row-cols-md-2 gap-3 justify-content-center align-items-center">
            {state.DataItemsSuKien.DanhSachSuKien.map(
              (child: any) => (
                <div
                  key={uuidv4()}
                  className="card mb-3 p-0"
                  style={{ width: "470px" }}
                >
                  <div className="row g-0">
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
                                child.Id as string,
                                child.Ten as string,
                                "sukien"
                              )
                            }
                            style={{
                              textAlign: "start",
                              width: "250px",
                              fontSize: "1.15rem",
                            }}
                          >
                            {child.Ten}
                          </h6>
                          <span
                            className="d-flex justify-content-center align-items-center chi-tiet"
                            onClick={() =>
                              GoToDetailPage(
                                "/chi-tiet-tin-tuc",
                                child.Id as string,
                                child.Ten as string,
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
                            {String.day(child.CreatedDateTime)}
                          </span>
                          <span style={{ marginLeft: "20px" }}>
                            <i className="bi bi-clock-fill" /> {String.time(child.CreatedDateTime)}
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
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const blog = state.DataItemsBlog && (
    <div className="container-xl mt-5">
      <h4 className="text-danger text-center tieu-de">
        {state.DataItemsBlog.TenNhomTinTuc}
      </h4>

      <OwlCarousel
        className="owl-theme mt-4"
        autoplay
        loop
        nav
        center
        items={
          state.DataItemsBlog.DanhSachTinTuc
            ? state.DataItemsBlog.DanhSachTinTuc.length
            : 4
        }
        responsive={responsive}
      >
        {state.DataItemsBlog.DanhSachTinTuc &&
          state.DataItemsBlog.DanhSachTinTuc.map((item: danhSachTintuc) => (
            <div key={uuidv4()} className="item card_carosel">
              <div>
                <img
                  src={item.URL_AnhDaiDien as string}
                  height="180px"
                  style={{ borderRadius: 5 }}
                />
                <div>
                  <h6
                    className="mt-1 card-title cursor-pointer underline-head-tt"
                    onClick={() =>
                      GoToDetailPage(
                        "/chi-tiet-tin-tuc",
                        item.Id as string,
                        item.TieuDe as string,
                        "tintuc"
                      )
                    }
                  >
                    {item.TieuDe}
                  </h6>
                  <p className="owl_text" style={{ wordWrap: "break-word" }}>
                    {item.MoTa}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </OwlCarousel>
    </div>
  );

  console.log(state)

  return (
    <div className="main_container">
      <CNotification ref={refNotification} />
      <div className="banner banner_btn_rout">
        <img src={banner} className="main_banner" />

        {!userInfo && (
          <button
            onClick={() => {
              GoToOtherPage("/dang-ky");
            }}
            className="button-49 banner_btn_ri"
            role="button"
          >
            Đăng ký
          </button>
        )}

        <div className="sub_banner">
          <img src={sub_banner_left} className="sub_banner_bt qc" />
          <img src={sub_banner_right} className="sub_banner_bt qd" />
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

      <div className="banner_2nd mt-2 mb-2 ">
        <img src={bg8} className="main_banner" />
        <div className="sub_banner">
          <img src={bg9} className="sub_banner_bt_2nd" />
          <img src={bg10} className="sub_banner_bt_2nd" />
          <img src={bg11} className="sub_banner_bt_2nd" />
        </div>
      </div>

      <div className="banner_2nd d-flex justify-content-center align-items-center mt-5">
        <img src={bg12} style={{ width: "70vw", height: "auto" }} />
      </div>

      <div className="main_sub_detal mb-2">
        <div className="container-xl d-flex flex-column">
          <h4 className="text-danger tieu-de">THÀNH TÍCH HỌC VIÊN</h4>
          <div
            className="container mt-2 d-flex justify-content-between congrate"
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

      {blog}

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
            <h4
              className="text-danger tieu-de"
              style={{ wordWrap: "break-word" }}
            >
              ĐĂNG KÍ TƯ VẤN MIỄN PHÍ
            </h4>
            <div className="input-group flex-nowrap mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Họ và Tên(*)"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                onChange={(e: any) => {
                  onChangeFormTuVan("Ten", e.target.value);
                }}
              />
            </div>
            <p className="mt-3" style={{ fontWeight: "bold" }}>
              Giới tính
            </p>
            <div className="form-check form-check-inline dd-aa-aba">
              <input
                className="tt-ds-asa-ava"
                type="radio"
                name="inlineRadioOptions"
                id="gender1"
                defaultValue="option1"
                onChange={(e: any) => {
                  onChangeFormTuVan("GioiTinh", "0");
                }}
              />
              <label className="form-check-label da-sac-scd" htmlFor="gender1">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline dd-aa-aba">
              <input
                className="tt-ds-asa-ava"
                type="radio"
                name="inlineRadioOptions"
                id="gender2"
                defaultValue="option2"
                onChange={(e: any) => {
                  onChangeFormTuVan("GioiTinh", "1");
                }}
              />
              <label className="form-check-label" htmlFor="gender2">
                Nữ
              </label>
            </div>
            <div className="form-check form-check-inline dd-aa-aba">
              <input
                className="tt-ds-asa-ava"
                type="radio"
                name="inlineRadioOptions"
                id="gender3"
                defaultValue="option2"
                onChange={(e: any) => {
                  onChangeFormTuVan("GioiTinh", "2");
                }}
              />
              <label className="form-check-label" htmlFor="gender3">
                Khác
              </label>
            </div>
            <div className="input-group flex-nowrap mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại(*)"
                aria-label="PhoneNumber"
                aria-describedby="addon-wrapping"
                onChange={(e: any) => {
                  onChangeFormTuVan("Sdt", e.target.value);
                }}
              />
            </div>
            <div className="input-group flex-nowrap mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Email(*)"
                aria-label="Email"
                aria-describedby="addon-wrapping"
                onChange={(e: any) => {
                  onChangeFormTuVan("Email", e.target.value);
                }}
              />
            </div>
            <div className="mt-3">
              <textarea
                className="form-control"
                rows={3}
                placeholder="Đóng góp cho học viện ....(*)"
                defaultValue={""}
                onChange={(e: any) => {
                  onChangeFormTuVan("NoiDung", e.target.value);
                }}
              />
            </div>
            <p
              className="mt-3 text-danger"
              style={{
                fontSize: "calc(1rem * 0.8)",
                textAlign: "justify",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              (*): Thông tin bắt buộc
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <button
                onClick={() => {
                  sendTuVan();
                }}
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
