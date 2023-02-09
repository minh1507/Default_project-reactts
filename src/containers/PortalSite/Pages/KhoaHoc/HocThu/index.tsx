import React, { useEffect, useReducer, useState } from "react";
import { connect } from "react-redux";
import avatar from "assets/img/ava3.png";
import Comment from "../../General/comment";
import Tree from "react-animated-tree";
import { useLocation } from "react-router-dom";
import { InitState } from "./InitState";
import { Actions } from "./Action";
import { Reducer } from "./Reducer";
import { Number } from "common/Number";
import { String } from "common/String";
interface Props {}

const HocThu = (props: Props) => {
  const [state, dispatch] = useReducer(Reducer, InitState);
  const [change, setChange] = useState(1);
  const [linkVideo, setLinkVideo] = useState("");
  const location = useLocation();
  useEffect(() => {
    Actions.GetKhoaHocThuPortal(location.state.id, dispatch);
    // Actions.GetGiaoAnLyThuyetTheoIdKhoaHoc(location.state.id, dispatch);
    // Actions.GetGiaoAnThucHanhTheoIdKhoaHoc(location.state.id, dispatch);
  }, []);
  const changeContent = (content: number) => {
    setChange(content);
  };
  const ThoiLuongRender = (ThoiLuong: any) => {
    var val = "0";
    if (Number.isInt(ThoiLuong)) {
      val = ThoiLuong + "";
    } else if (Number.isFloat(ThoiLuong)) {
      val =
        (ThoiLuong + "").split(".")[0] + ":" + (ThoiLuong + "").split(".")[1];
    }
    return val;
  };
  const GetLinkVideoLyThuyet = async (Id: any) => {
    var link = await Actions.GetLinkVideoLyThuyet(Id);
    setLinkVideo(link);
  };
  const GetLinkVideoThucHanh = async (Id: any) => {
    console.log(Id)
    var link = await Actions.GetLinkVideoThucHanh(Id);
    setLinkVideo(link);
  };
  console.log(linkVideo)
  const GiaoAnLyThuyetRender = () => {
    var element: any = [];
    state.ItemKhoaHocThu.GiaoAnLyThuyet.map((e1: any, ie: any) => {
      element.push(
        <div className="accordion mt-2" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#panelsStayOpen-collapse" + ie}
                aria-expanded="true"
                aria-controls={"panelsStayOpen-collapse" + ie}
              >
                {e1.Name}
              </button>
            </h2>
            <div
              id={"panelsStayOpen-collapse" + ie}
              className="accordion-collapse collapse show"
              aria-labelledby={"panelsStayOpen-heading" + ie}
            >
              <div className="accordion-body">
                {e1.Children.length > 0 &&
                  e1.Children.map((e2: any, ie2: any) => {
                    return (
                      <Tree open content={e2.Name}>
                        {
                          <>
                            {e2.Children.length > 0 &&
                              e2.Children.map((e3: any, ie3: any) => {
                                return (
                                  <Tree
                                    open
                                    content={
                                      <div className="play">
                                        <i className="bi bi-play-circle text-danger"></i>{" "}
                                        {ThoiLuongRender(e3.ThoiLuong)}
                                      </div>
                                    }
                                    type={
                                      <span
                                        className="title"
                                        onClick={() => {
                                          if (e3.MienPhi) {
                                            GetLinkVideoLyThuyet(e3.Id);
                                          }
                                        }}
                                      >
                                        {e3.Name}
                                        {e3.MienPhi ? (
                                          <i className="bi bi-eye-fill"></i>
                                        ) : (
                                          <></>
                                        )}
                                      </span>
                                    }
                                  />
                                );
                              })}
                          </>
                        }
                      </Tree>
                    );
                  })}
                {/* <Tree content="main" type="ITEM" canHide open>
                  <Tree content="hello" type={<span className="play"><i className="bi bi-play-circle text-danger"></i>{" "}12:20</span>} canHide />
                  <Tree content="subtree with children" canHide>
                    <Tree content="hello" />
                    <Tree content="sub-subtree with children">
                      <Tree content="child 1" />
                      <Tree content="child 2" />
                      <Tree content="child 3" />
                    </Tree>
                    <Tree content="hello" />
                  </Tree>
                  <Tree content="hello" canHide />
                  <Tree content="hello" canHide />
                </Tree> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return element;
  };

  const GiaoAnThucHanh = () => {
    var element: any = [];
    state.ItemKhoaHocThu.GiaoAnThucHanh.map((e1: any, ie: any) => {
      element.push(
        <div className="accordion mt-2" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={"#panelsStayOpen-collapse" + ie}
                aria-expanded="true"
                aria-controls={"panelsStayOpen-collapse" + ie}
              >
                {e1.Name}
              </button>
            </h2>
            <div
              id={"panelsStayOpen-collapse" + ie}
              className="accordion-collapse collapse show"
              aria-labelledby={"panelsStayOpen-heading" + ie}
            >
              <div className="accordion-body">
                {e1.Children.length > 0 &&
                  e1.Children.map((e2: any, ie2: any) => {
                    return (
                      <Tree open content={e2.Name}>
                        {
                          <>
                            {e2.Children.length > 0 &&
                              e2.Children.map((e3: any, ie3: any) => {
                                return (
                                  <Tree open content={e3.Name}>
                                    <>
                                      {e3.Children.length > 0 &&
                                        e3.Children.map((e4: any, ie4: any) => {
                                          return (
                                            <Tree
                                              open
                                              content={
                                                <div className="play">
                                                  <i className="bi bi-play-circle text-danger"></i>{" "}
                                                  {ThoiLuongRender(e4.ThoiLuong)}
                                                </div>
                                              }
                                              type={
                                                <span
                                                  className="title"
                                                  onClick={() => {
                                                    if (e4.MienPhi) {
                                                      GetLinkVideoThucHanh(e4.Id);
                                                    }
                                                  }}
                                                >
                                                  {e4.Name}
                                                  {e4.MienPhi ? (
                                                    <i className="bi bi-eye-fill"></i>
                                                  ) : (
                                                    <></>
                                                  )}
                                                </span>
                                              }
                                            />
                                          );
                                        })}
                                    </>
                                  </Tree>
                                );
                              })}
                          </>
                        }
                      </Tree>
                    );
                  })}
                {/* <Tree content="main" type="ITEM" canHide open>
                  <Tree content="hello" type={<span className="play"><i className="bi bi-play-circle text-danger"></i>{" "}12:20</span>} canHide />
                  <Tree content="subtree with children" canHide>
                    <Tree content="hello" />
                    <Tree content="sub-subtree with children">
                      <Tree content="child 1" />
                      <Tree content="child 2" />
                      <Tree content="child 3" />
                    </Tree>
                    <Tree content="hello" />
                  </Tree>
                  <Tree content="hello" canHide />
                  <Tree content="hello" canHide />
                </Tree> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return element;
  };

  const contentTab = () => {
    if (change == 1) {
      return (
        <div className="GiaoAnLyThuyet">
          {state.ItemKhoaHocThu && GiaoAnLyThuyetRender()}
        </div>
      );
    } else if (change == 2) {
      return (
        <div className="GiaoAnLyThuyet">
          {state.ItemKhoaHocThu && GiaoAnThucHanh()}
        </div>
      );
    }
  };
  
  return (
    <>
      <div className="text-center title-khoahoc-thu">
        <p>{state.ItemKhoaHocThu && state.ItemKhoaHocThu.TieuDe}</p>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm-7">
            <div className="Card-Hoc">
              {linkVideo 
              ? <iframe width="100%" style={{aspectRatio: "16/9"}} src={String.video(linkVideo)} />
              :<iframe width="100%" style={{aspectRatio: "16/9"}} src="https://www.youtube.com/embed/5hS3sa9d9fk" />
              }
              
            </div>
            <Comment tital="ok" />
          </div>
          <div className="col-sm-5">
            <div className="Card-Hoc">
              <div className="d-flex gap-4">
                <p
                  onClick={() => changeContent(1)}
                  className={`${change == 1 ? "doContent" : "unDoContent"}`}
                >
                  Giáo án lý thuyết
                </p>
                <p
                  onClick={() => changeContent(2)}
                  className={`${change == 2 ? "doContent" : "unDoContent"}`}
                >
                  Giáo án thực hành
                </p>
              </div>
              {contentTab()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(HocThu);
