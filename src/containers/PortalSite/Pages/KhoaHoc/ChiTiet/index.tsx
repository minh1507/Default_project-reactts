import React, { useEffect, useReducer, useRef, useState } from "react";
import { connect } from "react-redux";
import bg37 from "assets/img/bg37.png";
import bg38 from "assets/img/bg38.png";
import bg7 from "assets/img/bg7.png";
import { useHistory } from "react-router-dom";
import Comment from "../../General/comment";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { useLocation } from "react-router-dom";
import { String } from "common/String";
import { IResponseMessage } from "common/Models";
import { LabelPortal, Message } from "common/Enums";
import CNotification from "components/CNotification";
import createDOMPurify from 'dompurify'
const DOMPurify = createDOMPurify(window)
interface Props {}

const ChiTiet = (props: Props) => {
  const history = useHistory();
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);
  const location = useLocation();
  const refNotification = useRef<any>();

  useEffect(() => {
    // new YouTubeToHtml5();
    Actions.GetDetailKhoaHoc(location.state.id, dispatch);
  }, []);

  const changeContent = (content: number) => {
    setChange(content);
  };

  const addToCard = async () => {
    let res: IResponseMessage = await Actions.CreateGioHang({
      idKhoaHoc: state.DataDetail.Id,
      giaTien: state.DataDetail.HocPhiGiamGia,
    });
    if (res.Success) {
      refNotification.current.showNotification("success", Message.Add_To_Cart);
    }
  };

  const contentTab = () => {
    if (change == 1) {
      return (
        <div className="editor-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.DataDetail.GioiThieu) }}></div>
      );
    } else if (change == 2) {
      return (
        <div className="editor-content" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(state.DataDetail.NoiDung) }}></div>
      );
    }
  };

  const goToThanhToan = () => {
    window.scrollTo(0, 0);
    history.push("/thanh-toan");
  };

  const goToHocPage = () => {
    window.scrollTo(0, 0);
    history.push({pathname:"/khoa-hoc-thu", state: {id: location.state.id},search: `/${location.state.id}`});
  };

  return (
    <div>
      <CNotification ref={refNotification} />
      <img src={bg37} width="100%" height="auto" />
      <div className="main_course_detail">
        <div
          id="main_course_detail_before"
          className="container-xl d-flex justify-content-between"
        >
          <div className="row">
            <div className="col-sm-8">
            <div
              className="card-chi-tiet-khoa-hoc mb-3">
              <h4 className="text-danger tieu-de">
                {state.DataDetail.TieuDe}
              </h4>
              <iframe
                width="100%"
                style={{aspectRatio: "16/9"}}
                src={state.DataDetail.TieuDe}
              />
              <div className="d-flex gap-4">
                <p
                  onClick={() => changeContent(1)}
                  className={`${change == 1 ? "doContent" : "unDoContent"}`}
                >
                  GIỚI THIỆU
                </p>
                <p
                  onClick={() => changeContent(2)}
                  className={`${change == 2 ? "doContent" : "unDoContent"}`}
                >
                  NỘI DUNG KHÓA HỌC
                </p>
              </div>

              {contentTab()}
            </div>

            <div
              className="mb-3"
              style={{
                backgroundColor: "white",
                borderRadius: "2.5px 2.5px",
                padding: "30px 10px",
              }}
            >
              <div className="container main_news_2nd">
                <h3
                  className="mb-5"
                  style={{ fontWeight: "bold", textAlign: "center" }}
                >
                  BÌNH LUẬN
                </h3>
                <div className="d-flex mb-4">
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
              className="mb-3"
              style={{
                backgroundColor: "white",
                borderRadius: "2.5px 2.5px",
                padding: "20px 30px",
              }}
            >
              <h4
                className="text-center mb-3"
                style={{ margin: 0, fontStyle: "italic" }}
              >
                BÀI VIẾT LIÊN QUAN
              </h4>
              <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-center mb-3">
                <div
                  title="GIÁO ÁN CHỈNH DÁNG"
                  className="col "
                  style={{ maxWidth: "250px" }}
                >
                  <div
                    className="card card_main_container"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={bg7} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ textAlign: "start" }}>
                      <h5 className="text-danger card-title head_z">
                        GIÁO ÁN CHỈNH DÁNG
                      </h5>
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
                <div
                  title="GIÁO ÁN CHỈNH DÁNG"
                  className="col "
                  style={{ maxWidth: "250px" }}
                >
                  <div
                    className="card card_main_container"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={bg7} className="card-img-top" alt="..." />
                    <div className="card-body" style={{ textAlign: "start" }}>
                      <h5 className="text-danger card-title head_z">
                        GIÁO ÁN CHỈNH DÁNG
                      </h5>
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
            <div className="col-sm-4">
            <div className="card-gio-hang mb-3">
              <h4 className="tieu-de tieu-de-card text-center">
                Thông tin khóa học
              </h4>
              <div className="thon-tin-mua-hang">
                <p className="mb-1">
                  <i className="bi bi-clock" />&ensp; {LabelPortal.ThoiHan} <b>{state.DataDetail.ThoiHan}</b> tháng
                </p>
                <p className="mb-1">
                  <i className="text-danger bi bi-fire" />&ensp; {LabelPortal.MienPhiTruyCap} <b>{state.DataDetail.ThoiHanTruyCapMienPhi}</b> tháng
                </p>
                <p className="mb-1">
                  <i className="bi bi-box2-heart" />&ensp; {state.DataDetail.TrangThai ? "Đang mở" : "Đã đóng"}
                </p>
                <p className="mb-4">
                  <i className="bi bi-cash"></i>&ensp; {state.DataDetail.HocPhiGoc <= state.DataDetail.HocPhiGiamGia ? (
                    <span
                      className="text-danger"
                      style={{ fontWeight: "bold", fontSize: "1.8rem" }}
                    >
                      {String.num(state.DataDetail.HocPhiGoc)}đ
                    </span>
                  ) : (
                    <span
                      className="text-danger"
                      style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                    >
                      {String.num(state.DataDetail.HocPhiGiamGia)}đ
                    </span>
                  )}{" "}
                  {state.DataDetail.HocPhiGoc > state.DataDetail.HocPhiGiamGia && (
                    <span style={{ textDecoration: "line-through" }}>
                      {String.num(state.DataDetail.HocPhiGoc)}đ
                    </span>
                  )}
                </p>
                
                <div className="d-flex justify-content-center align-items-center flex-column">
                  <div className="d-flex mb-2">
                    <button
                      onClick={() => {
                        goToThanhToan();
                      }}
                      className="btn btn-danger"
                    >
                      MUA NGAY
                    </button>
                    &ensp;
                    <button
                      onClick={() => {
                        addToCard();
                      }}
                      className="btn btn-outline-danger"
                    >
                      THÊM VÀO GIỎ
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      goToHocPage();
                    }}
                    className="btn btn-link text-danger"
                  >
                    HỌC THỬ
                  </button>
                </div>
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
