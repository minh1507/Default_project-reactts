import CNotification from "components/CNotification";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import banner from "assets/img/banner.jpg";

interface Props {}

const DangNhap = (props: Props) => {
  const history = useHistory();
  const [item, setItem] = useState(false);
  const [forgetPass, setForgetPass] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const eye = () => {
    setItem(!item);
  };

  const forget = () => {
    setForgetPass(!forgetPass);
  };

  const register = () => {
    history.push("/dang-ky");
  };

  const DangNhap = () => {};

  return (
    <div
      className="d-flex justify-content-center align-items-center main_dang_nhap"
      style={{ minHeight: "100vh" }}
    >
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-6">
              <div className="card rounded-3">
                <img
                  src={banner}
                  className="w-100"
                  style={{
                    borderTopLeftRadius: ".3rem",
                    borderTopRightRadius: ".3rem",
                  }}
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-5">
                  {!forgetPass ? (
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Đăng ký
                    </h3>
                  ) : (
                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">
                      Tìm lại mật khẩu
                    </h3>
                  )}

                  <div className="px-md-2">
                    {!forgetPass ? (
                      <div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            placeholder="Tên đăng nhập"
                            className="form-control"
                          />
                        </div>

                        <div className="form-outline input-group mb-4">
                          <input
                            type={`${item ? "text" : "password"}`}
                            placeholder="Mật khẩu"
                            className="form-control"
                          />
                          <span
                            style={{ cursor: "pointer" }}
                            className="input-group-text"
                            onClick={() => {
                              eye();
                            }}
                          >
                            {item ? (
                              <i className="bi bi-eye-fill"></i>
                            ) : (
                              <i className="bi bi-eye-slash-fill"></i>
                            )}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            placeholder="Email"
                            className="form-control"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            placeholder="Mã OTP"
                            className="form-control"
                          />
                        </div>
                      </div>
                    )}

                    {!forgetPass && (
                      <div className="d-flex justify-content-between mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            className="form-check-label"
                            style={{ fontSize: "calc(1rem * 0.8)" }}
                          >
                            Lưu tài khoản
                          </label>
                        </div>
                        <span
                          onClick={() => {
                            forget();
                          }}
                          className="k_dang_nhap"
                        >
                          Quên mật khẩu
                        </span>
                      </div>
                    )}

                    {!forgetPass ? (
                      <div className="d-flex justify-content-center align-items-center mb-4">
                        <button
                          onClick={() => {
                            DangNhap();
                          }}
                          className="mb-3 header_btn bg-danger text-light "
                          style={{ width: "120px" }}
                        >
                          Đăng nhập
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center align-items-center mb-4">
                        <button
                          className="header_btn bg-danger text-light "
                          style={{ width: "120px" }}
                        >
                          Gửi
                        </button>
                      </div>
                    )}
                    {forgetPass && (
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "calc(0.8rem)",
                        }}
                      >
                        Bạn đã tìm được tài khoản?{" "}
                        <span onClick={() => forget()} className="k_dang_nhap">
                          Đăng nhập ngay nào
                        </span>
                      </p>
                    )}

                    {!forgetPass && (
                      <div className="style18 container-xl mb-3"></div>
                    )}

                    {!forgetPass && (
                      <div
                        style={{ fontSize: "2rem" }}
                        className="d-flex justify-content-center gap-3 mb-3"
                      >
                        <i className="bi bi-facebook change_icon_dang_nhap_face"></i>
                        <i className="bi bi-google change_icon_dang_nhap"></i>
                      </div>
                    )}

                    {!forgetPass && (
                      <p
                        className="text-center"
                        style={{ fontSize: "calc(1rem * 0.8)" }}
                      >
                        Bạn chưa có tài khoản?{" "}
                        <span
                          className="k_dang_nhap"
                          onClick={() => {
                            register();
                          }}
                        >
                          hãy tạo ngay nào.
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(DangNhap);
