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
  const [name, setName] = useState("");
  const [repName, setRepName] = useState("");

  const changeUl = (num: number) => {
    setChange(num);
  };

  const DanhSachTinTuc = [
    { Id: 1, name: "a", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 2, name: "b", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 3, name: "c", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 4, name: "d", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 5, name: "e", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 6, name: "f", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 7, name: "g", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 8, name: "h", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 9, name: "i", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 10, name: "k", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 11, name: "l", TieuDe: "Bai1", MoTa: "Bai2" },
    { Id: 12, name: "m", TieuDe: "Bai1", MoTa: "Bai2" },
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

  const changeStatus = (name: any) => {
    setName(name);
  };

  const changeStatusright = (name: any) => {
    setRepName(name);
  };

  console.log(repName);

  return (
    <div style={{ backgroundColor: "white" }}>
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
                    Cháy lớn tại dãy xưởng tạm, lực lượng PCCC & CNCH Hà Nội
                    căng mình dập lửa trong giá lạnh{" "}
                  </h5>
                  <p>
                    Khoảng 20h30, một vụ hỏa hoạn đã xảy ra tại làng Ngọc Trục
                    (Đại Mỗ, Nam Từ Liêm, Hà Nội), thời tiết hanh khô và giá rét
                    khiến cùng vất vả.
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
                    <h5 className="img-head-rightab text-center cursor-pointer">
                      <i className="bi bi-eye"></i>
                    </h5>
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
                    <h5 className="img-head-rightab text-center cursor-pointer">
                      <i className="bi bi-eye"></i>
                    </h5>
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
                    <h5 className="img-head-rightab text-center cursor-pointer">
                      <i className="bi bi-eye"></i>
                    </h5>
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
                    <h5 className="img-head-rightab text-center cursor-pointer">
                      <i className="bi bi-eye"></i>
                    </h5>
                  </div>
                  <div className="img-head-lefta">
                    <p>Bắc Bộ và Bắc Trung Bộ có mưa, sương mù</p>
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
            <div className="img-contain-right-box-class">
              <div className={`side-left-khoa-hoc ji-kh rout-kba-dun`}>
                <h5
                  className="kik-kh-kuki text-uppercase kt-su-aba"
                  style={{ fontSize: "1.2rem", margin: 0 }}
                >
                  Chuyên mục
                </h5>
                <div className="mt-3 mb-3 crossline"></div>
                <div
                  className="accordion round-de"
                  id="accordionPanelsStayOpenExample"
                >
                  {DanhSachTinTuc &&
                    DanhSachTinTuc.map((value: any) => (
                      <div
                        key={uuidv4()}
                        className={`accordion-item pim change-kt-sudo rule-kt-abac`}
                      >
                        <h2
                          className="accordion-header"
                          id={`heading${value.Id}`}
                        >
                          <div className="d-flex justify-content-between">
                            <span
                              className="text-kh-nav-leftbar role-kt-bili"
                              onClick={() => changeStatus(value.name)}
                            >
                              <div
                                className={`dubi-kt-left color-rim ${
                                  name == value.name && "color-rim-area"
                                }`}
                              >
                                Test
                              </div>
                              <div className="dubi-kt-right">(12)</div>
                            </span>
                            <span
                              className="accordion-button collapsed kt-du-aba"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse${value.Id}`}
                              aria-expanded="false"
                              aria-controls={`collapse${value.Id}`}
                            ></span>
                          </div>
                        </h2>
                        <div
                          id={`collapse${value.Id}`}
                          className="accordion-collapse collapse"
                          aria-labelledby={`heading${value.Id}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body pim">
                            <div
                              className="accordion "
                              id="accordionPanelsStayOpenExample"
                            >
                              <div className="accordion-item pom pim-kt-role">
                                <h2
                                  className="accordion-header"
                                  id="panelsStayOpen-headingOne"
                                >
                                  <div className="d-flex justify-content-between">
                                    <span className="text-kh-nav-leftbar kt-du-aba pim-kt-role-a">
                                      Bai 1 (2)
                                    </span>
                                  </div>
                                </h2>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default connect(mapState, mapDispatchToProps)(KienThuc);
