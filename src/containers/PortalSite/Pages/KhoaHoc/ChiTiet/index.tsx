import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import bg37 from "assets/img/bg37.png";
import bg38 from "assets/img/bg38.png";
import bg7 from "assets/img/bg7.png";
import NoiDung from "./NoiDung";
import { useHistory } from "react-router-dom";
import Comment from "../../General/comment";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { useLocation } from "react-router-dom";

interface Props {}

const ChiTiet = (props: Props) => {
  const history = useHistory();
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);
  const location = useLocation();

  useEffect(() => {
    Actions.GetDetailKhoaHoc(location.state.id, dispatch);
  }, []);

  const changeContent = (content: number) => {
    setChange(content);
  };
  console.log(state);

  const con = () => {
    if (change == 1) {
      return (
        <div>
          <h5 className="text-danger mb-3">GIỚI THIỆU KHÓA HỌC</h5>

          <div
            dangerouslySetInnerHTML={{
              __html: `<p className="mb-3" style={{ textAlign: "justify" }}>
            ${state.DataDetail.MoTa}
          </p>`,
            }}
          ></div>
        </div>
      );
    } else if (change == 2) {
      return (
        <div>
          <h5 className="text-danger mb-3 ">NỘI DUNG KHÓA HỌC</h5>
          <div
            dangerouslySetInnerHTML={{
              __html: `<p className="mb-3" style={{ textAlign: "justify" }}>
            ${state.DataDetail.NoiDung}
          </p>`,
            }}
          ></div>
        </div>
      );
    }
  };

  const goToThanhToan = () => {
    window.scrollTo(0, 0);
    history.push("/thanh-toan");
  };

  const goToHocPage = () => {
    window.scrollTo(0, 0);
    history.push("/khoa-hoc-thu");
  };

  const goToGioHang = () => {
    window.scrollTo(0, 0);
    history.push("/gio-hang");
  };

  return (
    <div>
      <img src={bg37} width="100%" height="auto" />
      <div className="main_course_detail">
        <div
          id="main_course_detail_before"
          className="container-xl d-flex justify-content-between"
        >
          <div id="main_course_detail_after" style={{ width: "69%" }}>
            <div
              className="mb-3"
              style={{
                backgroundColor: "white",
                borderRadius: "2.5px 2.5px",
                padding: "30px 10px",
              }}
            >
              <img
                className="mb-2"
                src={bg38}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="d-flex mb-5 gap-4">
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

              <NoiDung content={con()} />
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
          <div
            id="main_course_detail_after"
            className="mb-3"
            style={{
              width: "29%",
              backgroundColor: "white",
              borderRadius: "2.5px 2.5px",
              padding: "30px 10px",
              height: "350px",
            }}
          >
            <p className="mb-3" style={{ fontWeight: "bold" }}>
              THÔNG TIN KHÓA HỌC
            </p>
            <p className="mb-3">
              <i className="bi bi-clock" /> 3 tháng
            </p>
            <p className="text-danger mb-3">
              <i className="bi bi-fire" /> Miễn phí gia hạn thêm 3 tháng
            </p>
            <p className="mb-3">
              <i className="bi bi-box2-heart" /> Đang mở
            </p>
            <p className="mb-4">
              <span style={{ textDecoration: "line-through" }}>5.000.000đ</span>{" "}
              <span className="text-danger" style={{ fontWeight: "bold" }}>
                3.000.000 đ
              </span>
            </p>
            <div className="d-flex justify-content-center align-items-center flex-column">
              <div className="d-flex mb-2">
                <button
                  onClick={() => {
                    goToThanhToan();
                  }}
                  className="header_btn bg-danger text-light"
                >
                  MUA NGAY
                </button>
                <button
                  onClick={() => {
                    goToGioHang();
                  }}
                  className=" bg-info text-dark"
                  style={{
                    marginLeft: "10px",
                    border: "none",
                    borderRadius: "5px 5px",
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    padding: "5px 10px",
                  }}
                >
                  THÊM VÀO GIỎ
                </button>
              </div>
              <button
                onClick={() => {
                  goToHocPage();
                }}
                className=" bg-info text-dark"
                style={{
                  border: "none",
                  borderRadius: "5px 5px",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  padding: "5px 10px",
                }}
              >
                HỌC THỬ
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

export default connect(mapState, mapDispatchToProps)(ChiTiet);
