import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import MainCard from "../General/MainCard";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState, Item } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
const { v4: uuidv4 } = require("uuid");
import { String } from "common/String";
import OwlCarousel from "react-owl-carousel";

interface Props {}

const KienThuc = (props: Props) => {
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);

  const changeUl = (num: number) => {
    setChange(num);
  };

  const DanhSachTinTuc = [
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
    { TieuDe: "Bai1", MoTa: "Bai2" },
  ];
  // const customDiv = styled.div``;

  useEffect(() => {
    Actions.GetDSNhomTinTucPortal(
      "61e2c71d-0e59-4cf8-8c63-25888f6be8b6",
      dispatch
    );
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

  const blog = DanhSachTinTuc && (
    <>
      <OwlCarousel
        className="owl-theme mt-4"
        autoplay
        loop
        nav
        center
        items={DanhSachTinTuc ? DanhSachTinTuc.length : 4}
        responsive={responsive}
      >
        {DanhSachTinTuc &&
          DanhSachTinTuc.map((item: any) => (
            <div
              key={uuidv4()}
              className="item card_carosel"
              // style={{
              //   backgroundColor: "#1e1e1e",
              //   height: "100% !important"
              // }}
            >
              <div>
                <img
                  className="chaos-kt"
                  src={bg40}
                  height="180px"
                  style={{ borderRadius: 5 }}
                />
                <div>
                  <h6 className="mt-1 card-title cursor-pointer">
                    {item.TieuDe}
                  </h6>
                  <p className="owl_text" style={{ wordWrap: "break-word" }}>
                    {item.MoTa}
                  </p>
                  {/* <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="header_btn bg-danger text-light mt-3"
                    >
                      Xem chi tiết
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
      </OwlCarousel>
    </>
  );

  return (
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-xl pb-3">
        <div className="container-khoa-hoc mb-1 wrapper_kien_thuc_office">
          <div className="menu-khoa-hoc">
            {state.DataItem &&
              state.DataItem.map((value: Item) => (
                <div className="item-menu-khoa-hoc">{value.Ten}</div>
              ))}
          </div>
        </div>
        <div className="kt-contain-head mb-3">
          <div className="kt-head-left">
            <img
              src="https://kenh14cdn.com/zoom/460_289/203336854389633024/2023/1/30/photo1675045528930-1675045529015786877736.jpg"
              className="img-head-left"
            />
            <h3>
              Cháy lớn tại dãy xưởng tạm, lực lượng PCCC & CNCH Hà Nội căng mình
              dập lửa trong giá lạnh
            </h3>
            <p>
              Khoảng 20h30, một vụ hỏa hoạn đã xảy ra tại làng Ngọc Trục (Đại
              Mỗ, Nam Từ Liêm, Hà Nội), thời tiết hanh khô và giá rét khiến công
              việc chữa cháy vô cùng vất vả.
            </p>
          </div>
          <div className="kt-head-right">
            <div className="img-head-righta">
              <img
                src="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/1/29/photo1675007082817-1675007083123336849306.jpg"
                className="img-head-right"
              />
            </div>

            <div className="img-head-righta">
              <img
                src="https://kenh14cdn.com/zoom/280_175/203336854389633024/2023/1/29/photo1674980103724-1674980104092331791569.jpg"
                className="img-head-right"
              />
            </div>
          </div>
        </div>
        {blog}
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
