import React, { useState, useReducer, useEffect } from "react";
import { connect } from "react-redux";
import bg40 from "assets/img/Gioi-thieu.png";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import TreeMenu from "react-simple-tree-menu";
import { Guid } from "common/Enums";
const { v4: uuidv4 } = require("uuid");

interface Props {}

const KienThuc = (props: Props) => {
  const [change, setChange] = useState(1);
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [name, setName] = useState("");
  const [repName, setRepName] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [accName, setAccName] = useState("");
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

  // useEffect(() => {
  //   Actions.GetDSNhomTinTucPortal(
  //     "61e2c71d-0e59-4cf8-8c63-25888f6be8b6",
  //     dispatch
  //   );
  // }, []);
  const changeSetaccName = (name: string) => {
    setAccName(name);
  };
  useEffect(() => {
    Actions.GetTreeMonHocPortal(dispatch);
    Actions.GetTinTucPortal(Guid.Empty, dispatch);
    Actions.GetTinTucNoiBatPortal(dispatch);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
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
  const TinTucNoiBatRender = () => {
    let elementLeft:any = [];
    let elementRight:any = [];
    for(let i = 0;i < state.DataItemTinTucNoiBat.length;i++)
    {
      if(i == 0)
      {
        elementLeft.push(
          <>
            <img
              src="https://media.vov.vn/sites/default/files/styles/large/public/2021-12/v10c.jpg"
              className="img-head-left"
            />
            <div className="full-kt-box">
              <></>
              <h5 className="underline-head-tt">
                Cháy lớn tại dãy xưởng tạm, lực lượng PCCC & CNCH Hà Nội
                căng mình dập lửa trong giá lạnh{" "}
                <span className="card-text  mt-1"><small className="text-muted">20/12/2023 8:00 Tối</small></span>
              </h5>
              <p>
                Khoảng 20h30, một vụ hỏa hoạn đã xảy ra tại làng Ngọc Trục
                (Đại Mỗ, Nam Từ Liêm, Hà Nội), thời tiết hanh khô và giá
                rét khiến cùng vất vả.
              </p>
            </div>
          </>
      ) 
      }
      else if(i >= 1 && i <= 4)
      {
        elementRight.push(
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
              <p className="sub-news-noitbat underline-head-tt">
                Bắc Bộ và Bắc Trung Bộ có mưa, sương mù
              </p>
              <p className="card-text  mt-1"><small className="text-muted">20/12/2023 8:00 Tối</small></p>
            </div>
          </div>
        )
      }
    }
    return <>
    <div className="kt-head-left kop-ata-kh-left">
      {elementLeft}
    </div>
    <div className="kt-head-right ">
      {elementRight}
    </div>
  </>
  }
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="wrapper_img">
        <img className="mb-3" src={bg40} width="100%" height="auto" />
        <h1 className="reszex">KIẾN THỨC</h1>
      </div>
      <div className="container-xl pb-3">
        <div className="d-flex kt-contain-main mt-3">
          <div className="kt-left-contain dra-left-kti">
            {width && width > 768 && (
              <div className="kt-contain-head mb-3">
                {TinTucNoiBatRender()}
              </div>
            )}
            {accName ? (
              <h4 className="text-danger text-center tieu-de mb-3 kh-apeperar">
                Chuyên mục tin - {accName}
              </h4>
            ) : (
              <h4 className="text-danger text-center tieu-de mb-3">
                Chuyên mục tin mới cập nhật
              </h4>
            )}
              {
                state.DataItemTinTuc.map((e:any, ie:any) => {
                  return             <div
                  className="card border-popse mb-3 ml-1 mg-left-15 mg-right-15"
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
                        <h5 className="card-title underline-head-tt">
                          Hai đối tượng vác dao vào tận nhà dân truy sát
                        </h5>
                        <p className="card-text  mt-1">
                          <small className="text-muted">20/12/2023 8:00 Tối</small>
                        </p>
                        <p className="card-text posp-khso">
                          Do mâu thuẫn cá nhân, anh T. bị hai đối tượng mang dao vào
                          tận nhà truy sát. Hai đối tượng đã hành hung và đâm bị
                          thương khiến anh T. phải đi cấp cứu trong đêm.
                        </p>
                        <div className="underline-news"></div>
                      </div>
                    </div>
                  </div>
                </div>
                })
              }
          </div>
          {width && width > 961 && (
            <div className="kt-right-contain d-flex flex-column gap-2">
              <div className="img-contain-right-box-class">
                <div
                  className={`side-left-khoa-hoc ji-kh rout-kba-dun flex-column`}
                >
                  <h5
                    className="kik-kh-kuki kt-su-aba"
                    style={{ fontSize: "1.2rem", margin: 0 }}
                  >
                    Chuyên mục
                  </h5>
                  <div className="mt-3 mb-3 crossline"></div>
                  <TreeMenu
                    data={state.TreeChuyenMuc}
                    initialOpenNodes={[]}
                    hasSearch={false}
                    onClickItem={({ key, label, ...props }) => {
                      Actions.GetTinTucPortal(key, dispatch);
                      changeSetaccName(label);
                    }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(KienThuc);
