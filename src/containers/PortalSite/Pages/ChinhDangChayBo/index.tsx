import React from "react";
import { connect } from "react-redux";
import bg17 from "assets/img/bg17.png";
import bg20 from "assets/img/bg20.jpg";
import bg18 from "assets/img/bg18.jpg";
import bg19 from "assets/img/bg19.jpg";
import bg40 from "assets/img/Gioi-thieu.png";

interface Props {}

const ChinhDangChayBo = (props: Props) => {
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
      <div className="sk-head mb-3">
        <div className="container-xl d-flex justify-content-between">
          <div className="d-flex">
            <div className="hex4">
              <i className="bi bi-calendar4-week"></i>
            </div>
            <div className="sk-head-middle">
              <h5 className="text-sk-heade-fa text-uppercase text-danger">
                Sự kiện sắp diễn ra
              </h5>
              <h5 className="text-sk-heade-fa">
                Giải chạy bộ quanh hồ tây, gặp gỡ khách mời nổi tiếng
              </h5>
            </div>
            <div className="sk-head-middle text-overrid-head">
              <h5 className="text-sk-heade-fa amc text-uppercase text-danger">
                Diễn ra sau
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
      </div>

      <div className="container-xl">
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
      </div>

      <div className="main_sub_detal" style={{ padding: 0 }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 gap-3 justify-content-center align-items-center p-3">
            <div className="card mb-3 p-0" style={{ width: "450px" }}>
              <div className="row g-0" style={{ minHeight: "200px" }}>
                <div className="col-md-4" style={{ minHeight: "100%" }}>
                  <img
                    src={bg17}
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
                        LÀM VÒNG HỒ TÂY CHO NGƯỜI NGẤT NGÂY
                      </h5>
                      <span
                        className="d-flex justify-content-center align-items-center"
                        style={{
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
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-geo-alt-fill" /> Đường Thanh Niên,
                      Quận Tây Hồ, Thành phố Hà Nội
                    </p>
                    <div
                      className="mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <span>
                        <i className="bi bi-calendar-range-fill" /> 25/11/2022
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <i className="bi bi-clock-fill" /> 9:30 AM
                      </span>
                    </div>
                    <p
                      className="card-text mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-cash-stack" /> Miễn Phí
                    </p>
                    <p
                      className="card-text mt-2"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <i className="bi bi-calendar2-x-fill" /> Đã diễn ra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-0" style={{ width: "450px" }}>
              <div className="row g-0" style={{ minHeight: "200px" }}>
                <div className="col-md-4" style={{ minHeight: "100%" }}>
                  <img
                    src={bg20}
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
                        LÀM VÒNG HỒ TÂY CHO NGƯỜI NGẤT NGÂY
                      </h5>
                      <span
                        className="d-flex justify-content-center align-items-center"
                        style={{
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
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-geo-alt-fill" /> Đường Thanh Niên,
                      Quận Tây Hồ, Thành phố Hà Nội
                    </p>
                    <div
                      className="mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <span>
                        <i className="bi bi-calendar-range-fill" /> 25/11/2022
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <i className="bi bi-clock-fill" /> 9:30 AM
                      </span>
                    </div>
                    <p
                      className="card-text mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-cash-stack" /> Miễn Phí
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="header_btn bg-danger text-light mt-2"
                        style={{ width: "120px" }}
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-0" style={{ width: "450px" }}>
              <div className="row g-0" style={{ minHeight: "200px" }}>
                <div className="col-md-4" style={{ minHeight: "100%" }}>
                  <img
                    src={bg18}
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
                        LÀM VÒNG HỒ TÂY CHO NGƯỜI NGẤT NGÂY
                      </h5>
                      <span
                        className="d-flex justify-content-center align-items-center"
                        style={{
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
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-geo-alt-fill" /> Đường Thanh Niên,
                      Quận Tây Hồ, Thành phố Hà Nội
                    </p>
                    <div
                      className="mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <span>
                        <i className="bi bi-calendar-range-fill" /> 25/11/2022
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <i className="bi bi-clock-fill" /> 9:30 AM
                      </span>
                    </div>
                    <p
                      className="card-text mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-cash-stack" /> Miễn Phí
                    </p>
                    <p
                      className="card-text mt-2"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <i className="bi bi-calendar2-x-fill" /> Đã diễn ra
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mb-3 p-0" style={{ width: "450px" }}>
              <div className="row g-0" style={{ minHeight: "200px" }}>
                <div className="col-md-4" style={{ minHeight: "100%" }}>
                  <img
                    src={bg19}
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
                        LÀM VÒNG HỒ TÂY CHO NGƯỜI NGẤT NGÂY
                      </h5>
                      <span
                        className="d-flex justify-content-center align-items-center"
                        style={{
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
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-geo-alt-fill" /> Đường Thanh Niên,
                      Quận Tây Hồ, Thành phố Hà Nội
                    </p>
                    <div
                      className="mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <span>
                        <i className="bi bi-calendar-range-fill" /> 25/11/2022
                      </span>
                      <span style={{ marginLeft: "20px" }}>
                        <i className="bi bi-clock-fill" /> 9:30 AM
                      </span>
                    </div>
                    <p
                      className="card-text mt-2"
                      style={{ fontSize: "calc(1rem *.8)", textAlign: "start" }}
                    >
                      <i className="bi bi-cash-stack" /> Miễn Phí
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="header_btn bg-danger text-light mt-2"
                        style={{ width: "120px" }}
                      >
                        Đăng ký
                      </button>
                    </div>
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

export default connect(mapState, mapDispatchToProps)(ChinhDangChayBo);
