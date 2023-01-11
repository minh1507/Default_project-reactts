import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import banner from "assets/img/banner.jpg";
import { Message, UserType } from "common/Enums";
import { IResponseMessage } from "common/Models";
import { Actions } from "store/Global/Action";
import { Regular } from "common/Regular";
import CNotification from "components/CNotification";

interface Props {
  UserSignup?: Function;
}

const DangKy = (props: Props) => {
  const [InputSignup, setInputSignup] = useState({
    FullName: "",
    UserName: "",
    Password: "",
    Email: "",
    Phone: "",
    Address: "",
    Type: UserType.Public,
  });
  const [Cpass, setCpass] = useState("");
  const [item, setItem] = useState({ pass: false, cpass: false });
  const [check, setCheck] = useState(false);
  const refNotification = useRef<any>();
  const history = useHistory();
  const register = () => {
    history.push("/trang-chu");
  };

  const eyeChange = (key: string) => {
    if (key === "pass") {
      setItem({
        ...item,
        [key]: !item.pass,
      });
    } else {
      setItem({
        ...item,
        [key]: !item.cpass,
      });
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.keyCode == 13) {
      let tagNameFocus = document.activeElement.tagName.toLowerCase();
      if (tagNameFocus !== "button") {
        Signup();
      }
    }
  };
  const ValidateForm = () => {
    // if(InputSignup.Phone.length < 10){
    //     refNotification.current.showNotification("warning", Message.Phone_Wrong);
    //     return false;
    // }
    if (!check) {
      refNotification.current.showNotification(
        "warning",
        Message.PolicyChecking
      );
      return false;
    }
    if (!InputSignup.FullName) {
      refNotification.current.showNotification(
        "warning",
        Message.FullName_Is_Not_Empty
      );
      return false;
    }
    if (Cpass != InputSignup.Password) {
      refNotification.current.showNotification(
        "warning",
        Message.DuplicatePassword
      );
      return false;
    }
    if (!InputSignup.UserName) {
      refNotification.current.showNotification(
        "warning",
        Message.UserName_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.Password) {
      refNotification.current.showNotification(
        "warning",
        Message.Password_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.Email) {
      refNotification.current.showNotification(
        "warning",
        Message.Email_Is_Not_Empty
      );
      return false;
    }
    if (!InputSignup.Phone) {
      refNotification.current.showNotification(
        "warning",
        Message.Phone_Is_Not_Empty
      );
      return false;
    }
    if (!Regular.password(InputSignup.Password)) {
      refNotification.current.showNotification(
        "warning",
        Message.Password_Wrong
      );
      return false;
    }
    if (!Regular.email(InputSignup.Email)) {
      refNotification.current.showNotification(
        "warning",
        Message.Email_Is_Not_Format
      );
      return false;
    }
    if (!Regular.phoneVN(InputSignup.Phone)) {
      refNotification.current.showNotification(
        "warning",
        Message.Phone_Is_Not_Format
      );
      return false;
    }

    return true;
  };
  const Signup = async () => {
    if (ValidateForm()) {
      let res: IResponseMessage = await props.UserSignup(InputSignup);
      console.log(res);
      if (res && res.Success) {
        refNotification.current.showNotification("success", res.Message);
        setInputSignup({
          FullName: "",
          UserName: "",
          Password: "",
          Email: "",
          Phone: "",
          Address: "",
          Type: UserType.Public,
        });
        history.push("/trang-chu");
      }
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const onChange = (key: string, e: any) => {
    if (key === "Phone") {
      setInputSignup({
        ...InputSignup,
        [key]: `+84 ${e.target.value}`,
      });
    } else {
      setInputSignup({
        ...InputSignup,
        [key]: e.target.value,
      });
    }
  };

  const goToSignIn = () => {
    history.push("/dang-nhap");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center main_dang_ky"
      style={{ minHeight: "100vh" }}
    >
      <CNotification ref={refNotification} />
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
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Đăng ký</h3>

                  <div className="px-md-2">
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        placeholder="Họ và Tên"
                        onChange={(e: any) => {
                          onChange("FullName", e);
                        }}
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        onChange={(e: any) => {
                          onChange("UserName", e);
                        }}
                        className="form-control"
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        placeholder="Địa chỉ"
                        onChange={(e: any) => {
                          onChange("Address", e);
                        }}
                        className="form-control"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline datepicker">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e: any) => {
                              onChange("Email", e);
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="input-group ">
                          <span className="input-group-text" id="basic-addon1">
                            +84
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            onChange={(e: any) => {
                              onChange("Phone", e);
                            }}
                            aria-describedby="basic-addon1"
                          ></input>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline input-group mb-4">
                      <input
                        type={`${item.pass ? "text" : "password"}`}
                        placeholder="Mật khẩu"
                        onChange={(e: any) => {
                          onChange("Password", e);
                        }}
                        className="form-control"
                      />
                      <span
                        style={{ cursor: "pointer" }}
                        className="input-group-text"
                        onClick={() => {
                          eyeChange("pass");
                        }}
                      >
                        {item.pass ? (
                          <i className="bi bi-eye-fill"></i>
                        ) : (
                          <i className="bi bi-eye-slash-fill"></i>
                        )}
                      </span>
                    </div>
                    <div className="form-outline input-group mb-4">
                      <input
                        type={`${item.cpass ? "text" : "password"}`}
                        placeholder="Mật khẩu"
                        onChange={(e: any) => {
                          setCpass(e.target.value);
                        }}
                        className="form-control"
                      />
                      <span
                        style={{ cursor: "pointer" }}
                        className="input-group-text"
                        onClick={() => {
                          eyeChange("cpass");
                        }}
                      >
                        {item.cpass ? (
                          <i className="bi bi-eye-fill"></i>
                        ) : (
                          <i className="bi bi-eye-slash-fill"></i>
                        )}
                      </span>
                    </div>
                    <div>
                      <p
                        className="mb-2"
                        style={{
                          fontSize: "calc(1rem * 0.8)",
                          textAlign: "justify",
                        }}
                      >
                        Chú ý: bạn nên sử dụng mật khẩu mạnh có ít nhất 8 ký tự,
                        1 chữ in hoa, chữ thường, số và kí hiệu
                      </p>
                      <div
                        className="form-check mb-4"
                        style={{ fontSize: "calc(1rem * 0.8)" }}
                      >
                        <input
                          className="form-check-input"
                          onChange={(e) => {
                            setCheck(e.target.checked);
                          }}
                          type="checkbox"
                          value=""
                        />
                        <label className="form-check-label">
                          Xác nhận với các{" "}
                          <span className="k_dang_nhap">
                            Điều khoản trong chính sách sử dụng
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="mb-4 d-flex justify-content-center align-items-center">
                      <button
                        onClick={() => {
                          Signup();
                        }}
                        className="header_btn bg-danger text-light "
                        style={{ width: "120px" }}
                      >
                        Đăng ký
                      </button>
                    </div>

                    <p
                      style={{ textAlign: "center", fontSize: "calc(0.8rem)" }}
                    >
                      Bạn đã có tài khoản?{" "}
                      <span
                        onClick={() => goToSignIn()}
                        className="k_dang_nhap"
                      >
                        Đăng nhập ngay nào
                      </span>
                    </p>
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
const mapDispatchToProps = {
  UserSignup: Actions.UserSignup,
};

export default connect(mapState, mapDispatchToProps)(DangKy);
