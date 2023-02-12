import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import qr from "assets/img/QR.png";
import { useHistory, useLocation } from "react-router-dom";
import banner from "assets/img/banner.jpg";
import { Storage } from "common/Storage";
import { Actions as GlobalActions } from "store/Global/Action";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { InitState } from "./InitState";
import { String } from "common/String";
const { v4: uuidv4 } = require("uuid");

interface Props {
  AddToCard: any;
}

const ThanhToan = (props: Props) => {
  const history = useHistory();
  const location = useLocation();
  const [xacNhanThanhCong, setXacNhanThanhCong] = useState(false);
  const [state, dispatch] = useReducer(Reducer, InitState);
  const XacNhan = () => {
    Storage.removeSession("cart-info");
    props.AddToCard(0);
    setXacNhanThanhCong(true);
  };
  const goToTrangChu = () => {
    history.push("/trạng-chu");
    window.scrollTo(0, 0);
  };

  const goToGioHang = () => {
    history.push("/gio-hang");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const output = location.state.arr.map((id: any) => ({ id }));
    Actions.GetGioHang(output, dispatch);
  }, []);

  console.log(state);

  return (
    <div>
      {xacNhanThanhCong == false ? (
        <div
          style={{
            backgroundColor: "#eeeeee",
            padding: "30px 0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h4 className="text-danger text-center tieu-de mb-3">
            {"Thanh toán"}
          </h4>
          <div>
            <div style={{ borderRadius: "5px 5px", backgroundColor: "white" }}>
              <div className="p-4 pb-2">
                <div>
                  <span className="bold">Chi tiết đơn hàng:</span>{" "}
                  <span>{state.Count} sản phẩm</span>
                </div>
                {state.DataItem &&
                  state.DataItem.map((e: any, ie: any) => {
                    return (
                      <div key={uuidv4()} className="ItemListstyles">
                        <div className="list-container">
                          <div className="styles__FlexRow">
                            <div className="item-info">
                              <div className="item-info__qty p-1 px-2">{ie + 1}</div>
                              <div className="item-info__name p-1 px-2">
                                {e.TieuDe}
                              </div>
                            </div>
                            <div className="item-price p-1 px-2">{String.num(e.HocPhiGiamGia)} ₫</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <div className="ItemListstyles">
                  <div className="item-info__qty p-1 px-2 text-end bold">
                    Tổng tiền{" "}
                    <span
                      className="text-danger bold"
                      style={{ fontSize: 23, marginLeft: 10 }}
                    >
                      {String.num(state.Total)} ₫
                    </span>
                  </div>
                </div>
                <h5 className="bold">Phương thức thanh toán</h5>
              </div>
              <div className="d-flex justify-content-center align-items-center p-4">
                <div
                  className="row p-4 pt-1 justify-content-center"
                  style={{
                    border: "1px solid rgb(238, 238, 238)",
                    borderRadius: "5px 5px",
                    maxWidth: "720px",
                  }}
                >
                  <div className="col-sm-4 text-muted p-2">Ngân hàng:</div>
                  <div className="col-sm-8 bold p-2">
                    BIDV- Ngân hàng BIDV chi nhánh Hai Bà Trưng
                  </div>
                  <div className="col-sm-4 text-muted p-2">Chủ thẻ:</div>
                  <div className="col-sm-8 bold p-2">Đinh Quang Tiến</div>
                  <div className="col-sm-4 text-muted p-2">
                    Nội dung chuyển khoản:
                  </div>
                  <div className="col-sm-8 bold p-2">
                    [Họ tên] + [Số điện thoại] + [Tên khóa học]
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <h4 className=" text-center mb-3">Quét mã QR</h4>
                <img className="mb-5" src={qr} />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center gap-3">
              <button
                onClick={() => {
                  goToGioHang();
                }}
                className=" bg-light text-danger mt-3"
                style={{
                  width: "120px",
                  border: "1px solid pink",
                  borderRadius: "5px 5px",
                  padding: "5px 0",
                }}
              >
                Quay lại
              </button>
              <button
                onClick={() => {
                  XacNhan();
                }}
                className=" bg-danger text-light mt-3"
                style={{
                  width: "120px",
                  border: "none",
                  borderRadius: "5px 5px",
                  padding: "5px 0",
                }}
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3 mb-5 text-center">
          <img src={banner} width="500" />
          <h4 className="text-danger mt-2 text-center tieu-de">
            {"Xác nhận thanh toán thành công !"}
          </h4>
          <p className="text-center">
            {"Đơn hàng của khách sẽ được chúng tôi xử lý"}
          </p>
          <p className="text-center">
            {"Những thắc mắc vui lòng liên hệ qua điện thoại"}
          </p>
          <button
            onClick={() => {
              goToTrangChu();
            }}
            className="text-center bg-light text-danger mt-2"
            style={{
              width: "120px",
              border: "1px solid pink",
              borderRadius: "5px 5px",
              padding: "5px 0",
            }}
          >
            Quay lại
          </button>
        </div>
      )}
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {
  AddToCard: GlobalActions.AddToCard,
};

export default connect(mapState, mapDispatchToProps)(ThanhToan);
