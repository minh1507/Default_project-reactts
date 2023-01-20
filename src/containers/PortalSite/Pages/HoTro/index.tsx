import React from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/bg40.png";
import bg7 from "assets/img/bg7.png";
import email from "assets/img/email.png";
import call from "assets/img/Call center.png";

interface Props {}

const HoTro = (props: Props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={bg40} width="100%" height="auto" />
      <div className="mt-3" style={{ padding: "0 40px", textAlign: "center" }}>
        <div>
          <div className="main_sub_detal">
            <div className="container mb-5">
              <h3 className="mb-5" style={{ fontWeight: "bold" }}>
                HỖ TRỢ KHÁCH HÀNG
              </h3>
              <div className="row row-cols-1 row-cols-md-4 g-3 justify-content-center">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="style17 container-xl"></div>

      <div className="mt-5 mb-5 main_panel">
        <div className="left-panel">
          <div className="d-flex justify-content-center">
            <img src={email} className="mb-3" width="103px" height="103px" />
          </div>

          <p className="mb-3 text-center">Địa chỉ Email</p>
          <p className="text-center">hocviendangquangmarathon@oao.vn</p>
        </div>
        <div className="right-panel">
          <div className="d-flex justify-content-center">
            <img src={call} className="mb-3" width="103px" height="103px" />
          </div>

          <p className="mb-3 text-center">Địa chỉ Email</p>
          <p className="text-center">091 658 2783</p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div
          className="mt-5 d-flex flex-column container-xl "
          style={{ padding: "0 0 30px 0", maxWidth: "500px" }}
        >
          <div className="text-center" style={{ padding: "20px 2rem" }}>
            <h3 className="mb-3" style={{ fontWeight: "bold" }}>
              GỬI TIN NHẮN
            </h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="olivia@untitledui.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Nội dung tin"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={""}
              />
            </div>
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
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(HoTro);
