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
import ba1 from "assets/img/ba2.jpg";

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

  return (
    <div style={{ backgroundColor: "#f5f5fa" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-xl pb-3">
        <div className="d-flex kt-contain-main mt-3">
          <div className="kt-left-contain">
            <div className="kt-contain-head mb-3">
              <div className="kt-head-left">
                <img
                  src="https://media.vov.vn/sites/default/files/styles/large/public/2021-12/v10c.jpg"
                  className="img-head-left"
                />
                <div className="full-kt-box">
                  <h5>
                    Cháy lớn tại dãy xưởng tạm, lực lượng PCCC & CNCH Hà Nội căng
                    mình dập lửa trong giá lạnh{" "}
                  </h5>
                  <p>
                    Khoảng 20h30, một vụ hỏa hoạn đã xảy ra tại làng Ngọc Trục (Đại
                    Mỗ, Nam Từ Liêm, Hà Nội), thời tiết hanh khô và giá rét khiến
                    cùng vất vả.
                  </p>
                </div>
              </div>

              <div className="kt-head-right">
                <div className="subnews-head-right">
                  <div className="img-head-righta">
                    <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/base64-16341571948261078837500.png"
                      className="img-head-right"
                    />
                    <h5 className="img-head-rightab text-center cursor-pointer"><i className="bi bi-eye"></i></h5>
                  </div>
                  <div className="img-head-lefta">
                      <p>Bắc Bộ và Bắc Trung Bộ có mưa, sương mù</p>
                  </div>
                </div>
                <div className="subnews-head-right">
                  <div className="img-head-righta">
                    <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/base64-16341571948261078837500.png"
                      className="img-head-right"
                    />
                    <h5 className="img-head-rightab text-center cursor-pointer"><i className="bi bi-eye"></i></h5>
                  </div>
                  <div className="img-head-lefta">
                      <p>Bắc Bộ và Bắc Trung Bộ có mưa, sương mù</p>
                  </div>
                </div>
                <div className="subnews-head-right">
                  <div className="img-head-righta">
                    <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/base64-16341571948261078837500.png"
                      className="img-head-right"
                    />
                    <h5 className="img-head-rightab text-center cursor-pointer"><i className="bi bi-eye"></i></h5>
                  </div>
                  <div className="img-head-lefta">
                      <p>Bắc Bộ và Bắc Trung Bộ có mưa, sương mù</p>
                  </div>
                </div>
                <div className="subnews-head-right">
                  <div className="img-head-righta">
                    <img
                      src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/10/14/base64-16341571948261078837500.png"
                      className="img-head-right"
                    />
                    <h5 className="img-head-rightab text-center cursor-pointer"><i className="bi bi-eye"></i></h5>
                  </div>
                  <div className="img-head-lefta">
                      <p>Bắc Bộ và Bắc Trung Bộ có mưa, sương mù</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kt-right-contain d-flex flex-column gap-2">
            <div className="img-contain-right-box-class">
              <img
                className="img-kt-right"
                src="https://images.pexels.com/photos/4050325/pexels-photo-4050325.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
          </div>
        </div>
        <div className="d-flex kt-contain-main mt-3">
          <div className="kt-left-contain">
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card border-popse mb-3"
              style={{ maxWidth: "100%" }}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src="https://kenh14cdn.com/thumb_w/620/203336854389633024/2023/1/30/photo-1-1675049066382717747176.jpg"
                    className="img-kh-cls "
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body card-bodys">
                    <h5 className="card-title">
                      Hai đối tượng vác dao vào tận nhà dân truy sát
                    </h5>
                    <p className="card-text popse-khso-p">
                      <small className="text-muted">20/12/2023 8:00 Tối</small>
                    </p>
                    <p className="card-text posp-khso mb-1">
                      Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                      tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                      thương khiến anh T. phải đi cấp cứu trong đêm.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mt-3">
              <nav aria-label="Page navigation example ">
                <ul className="pagination">
                  <li className="page-item ">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="kt-right-contain d-flex flex-column gap-2">

          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
