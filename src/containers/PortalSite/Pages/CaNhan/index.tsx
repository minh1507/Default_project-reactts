import React, { useState } from "react";
import { connect } from "react-redux";
// import profile from "assets/img/profile.png";

interface Props {}

const CaNhan = (props: Props) => {
  const [change, setChange] = useState(1);

  const onChanges = (num: number) => {
    setChange(num);
  };
  return (
    <div>
      <div className="container-xl container-canhan">
        <div className="row justify-content-between w-100">
          <div className="col-sm-3">
            <ul className="ul-canhan w-100">
              <li
                className={`li-canhan ${change === 1 && "li-canhan-active"}`}
                onClick={() => {
                  onChanges(1);
                }}
              >
                <i className="bi bi-person-fill"></i> Tài Khoản
              </li>
              <li
                className={`li-canhan ${change === 2 && "li-canhan-active"}`}
                onClick={() => {
                  onChanges(2);
                }}
              >
                <i className="bi bi-cart-fill"></i> Lịch sử giao dịch
              </li>
              <li
                className={`li-canhan ${change === 3 && "li-canhan-active"}`}
                onClick={() => {
                  onChanges(3);
                }}
              >
                <i className="bi bi-file-earmark-lock2-fill"></i> Mật khẩu và
                bảo mật
              </li>
            </ul>
          </div>

          <div className="col-sm-9">
            {change === 1 && (
              <div className="tai-khoan-ca-nhan">
                <h3 className="mb-3">Tổng quan</h3>
                <p className="mb-1">Họ và tên: Dương Đức Anh</p>
                <p className="mb-1">Email: duongdoican@gmail.com</p>
                <p className="mb-1">Ngày tham gia: 23 tháng 12 năm 2023</p>
                <p className="mb-3">Đã tham gia: 6 khóa học - 3 sự kiện</p>
                <div className="split-avat"></div>
                {/* <div className="d-flex align-items-center mb-3">
                  <div className="img-canhan">
                    <img
                      width={200}
                      height={200}
                      className="child-img-canhan"
                      src={profile}
                    />
                  </div>
                  <button className="btn-avatar-canhan">
                    Sửa ảnh đại diện
                  </button>
                  <div className="split-2-aba"></div>
                  <div className="right-text-canhan">
                    <p>Vui lòng chọn ảnh nhỏ hơn 5MB</p>
                    <p>Chọn hình ảnh phù hợp, không phản cảm</p>
                  </div>
                </div> */}
                <div className="split-avat mb-3"></div>
                <h3 className="mb-3">Cập nhật thông tin</h3>
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Họ"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Tên"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Số điện thoại"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Địa chỉ"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  <button type="button" className="btn btn-danger">
                    Lưu thay đổi
                  </button>
                </div>
              </div>
            )}
            {change == 2 && (
              <div className="tai-khoan-ca-nhan">
                <h3 className="mb-2">Lịch sử mua khóa học</h3>
                <p className="mb-3">
                  Hiển thị thông tin các khóa học bạn đã mua
                </p>
                <div className="split-avat mb-3"></div>
                <div className="table-responsive">
                  <table className="table align-middle">
                    <thead>
                      <tr>
                        <th>1</th>
                        <th>1</th>
                        <th>1</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {change == 3 && (
              <div className="tai-khoan-ca-nhan">
                <h3 className="mb-2">Mật khẩu & Bảo mật</h3>
                <div className="split-avat mb-3"></div>
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <h5 className="mb-3">Đổi mật khẩu</h5>
                    <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Mật khẩu mới"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                   <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                  </div>
                  
                  <div className="split-2-abaa"></div>
                  <div className="right-text-canhan">
                    <p>Phải từ 8 ký tự trở lên</p>
                    <p>Phải có ít nhất 1 chữ in hoa, 1 số và 1 ký tự đặc biệt</p>
                  </div>
                  
                </div>
                <button type="button" className="btn btn-danger">Lưu thay đổi</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(CaNhan);
