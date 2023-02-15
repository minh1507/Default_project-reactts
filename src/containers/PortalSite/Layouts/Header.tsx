import React, { useCallback, useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import logo from "assets/img/logoRun.png";
import { useHistory, useLocation } from "react-router-dom";
import MenuService from "services/MenuService";
import { IUserInfo } from "common/Models";
import { Actions } from "store/Global/Action";
import { Storage } from "common/Storage";
import { Message } from "common/Enums";
import CNotification from "components/CNotification";
const { v4: uuidv4 } = require("uuid");

interface Props {
  global: any;
  UserLogout?: Function;
}

interface HData {
  Name: String;
  Id: String;
  Code: Number;
  Children: HData[];
  URL: String;
}

interface HTreePortal {
  Data: HData[];
  Message: String;
  StatusCode: Number;
  Success: Boolean;
}

const Header = (props: Props) => {
  const location = useLocation();
  const history = useHistory();
  const [change, setchange] = useState(false);
  const [item, setItem] = useState(1);
  const [tree, setTree] = useState<HTreePortal>(null);
  const refNotification = useRef<any>();
  const [search, setSearch] = useState(false)

  let userInfo: IUserInfo = JSON.parse(Storage.getSession("UserInfo"));
  const GoToOtherPage = (page: string) => {
    setchange(false);
    history.push(page);
    window.scrollTo(0, 0);
  };

  const fetchTreePortal = useCallback(async () => {
    let response = await MenuService.GetTreePortal();
    setTree(response);
  }, []);

  useEffect(() => {
    fetchTreePortal();
  }, []);

  const Logout = () => {
    refNotification.current.showNotification(
      "success",
      `Hẹn gặp lại ${userInfo.UserName}`
    );
    props.UserLogout();
    history.push("/trang-chu");
  };

  const headerChange = (name: any) => {
    if (location.pathname == name) {
      return true;
    }
    return false;
  };

  const navbar =
    tree &&
    tree.Data?.map((tree: HData) => (
      <div key={uuidv4()} className="show_catching">
        <span
          className={`${
            headerChange(tree.URL) && "lage dumsa"
          } catching la nav navbar_link sups`}
          onClick={() => {
            GoToOtherPage(tree.URL as string);
          }}
        >
          {tree.Name}
        </span>
        {tree.Children.length > 0 && (
          <div className="hide">
            {tree.Children.map((child: any) => (
              <div key={uuidv4()} className="kkk">
                <p
                  className="la ddd"
                  onClick={() => {
                    GoToOtherPage(tree.URL as string);
                  }}
                >
                  {child.Name}
                </p>
                {child.Children.length > 0 && (
                  <div className="hides">
                    {child.Children.map((childrens: HData) => (
                      <div key={uuidv4()}>
                        <p
                          className="la"
                          onClick={() => {
                            GoToOtherPage(tree.URL as string);
                          }}
                        >
                          {childrens.Name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ));

    const changSearch = () => {
      setSearch(!search)
    }

  const navbarMob =
    tree &&
    tree.Data?.map((tree: HData) => (
      <li key={uuidv4()}>
        <h6
          onClick={() => {
            GoToOtherPage(tree.URL as string);
          }}
          className={`${headerChange(tree.URL) ? "golden" : "unGolden"}`}
        >
          {tree.Name}
        </h6>
      </li>
    ));
  const cardCount = () => {
    var cardInfo = Storage.getSession("cart-info");
    if(!cardInfo)
    {
      return 0;
    }
    var arrCardInfo = cardInfo.split(",");
    return arrCardInfo.length;
  }

  return (
    <div className={`headers`}>
      <CNotification ref={refNotification} />
     
      <div className="header_top bg-danger text-light">
        <div className="container-xl header_top_container d-flex align-items-center justify-content-between">
          <div className="header_top_mobile">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <span>
                    <i className="fa-solid fa-phone-volume"></i>
                  </span>
                  <span className=" header_top_left_text">091 658 2783</span>
                </div>
                <div className="carousel-item">
                  <span>
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  <span className="header_top_left_text">
                    hocviendangquangmarathon@oao.vn
                  </span>
                </div>
              </div>
            </div>
          </div>

          <span className="header_top_tab">
            <span>
              <span>
                <i className="fa-solid fa-phone-volume"></i>
              </span>
              <span className=" header_top_left_text">091 658 2738</span>
            </span>
            <span className="header_top_left_child">
              <span>
                <i className="fa-solid fa-envelope"></i>
              </span>
              <span className="header_top_left_text">
                hocviendangquangmarathon@oao.vn
              </span>
            </span>
          </span>
          <span className="d-flex gap-2 align-items-center justify-content-center group_icon">
            <a href="#" className="header_link h-100">
              <i
                className="bi bi-facebook"
                style={{ verticalAlign: "middle" }}
              ></i>
            </a>
            <a href="#" className="header_link h-100">
              <i
                className="bi bi-instagram"
                style={{ verticalAlign: "middle" }}
              ></i>
            </a>
            <a href="#" className="header_link h-100">
              <i
                className="bi bi-telegram"
                style={{ verticalAlign: "middle" }}
              ></i>
            </a>
            <a href="#" className="header_link h-100">
              <i
                className="bi bi-wechat"
                style={{ verticalAlign: "middle" }}
              ></i>
            </a>
          </span>
        </div>
      </div>
      <div className="container-xl header_bottom">
        <div className="d-flex justify-content-between align-items-center h-100 ">
          {/* <div className="d-flex align-items-center error">
            <img src={logo} className="header_bottom_logo" />
            <div className="header_bottom_logo_option">
              <select
                className="form-select header_bottom_select form-select-sm"
                aria-label="Default select example"
              >
                <option value="Vi">Vi</option>
                <option value="EN">EN</option>
              </select>
            </div>
          </div> */}
          <div className="d-flex navbar_container_main ">
            <img src={logo} className="header_bottom_logo" />
            {navbar}
          </div>
          <div>
            <div className="container-inp-uej">
              <i className="bi bi-search"></i>
              <input className="inp-uej" placeholder="Tìm kiếm"/>
            </div>
          </div>
          <div className="d-flex gap-3 align-items-center error_nav">
            {/* <span
              style={{ cursor: "pointer", fontSize: "1.3rem" }}
              className="header_bottom_link"
            >
              <i className="bi bi-search"></i>
            </span> */}
            {/* {userInfo && ( */}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => {
                  GoToOtherPage("/gio-hang");
                }}
                className="header_bottom_link position-relative"
              >
                <span
                  style={{ fontSize: "calc(1rem*0.7)" }}
                  className="position-absolute top-100 start-100 translate-middle badge rounded-pill bg-danger"
                >
                  {cardCount()}{" +"}
                  <span className="visually-hidden">unread messages</span>
                </span>
                <i className="bi bi-cart" style={{ fontSize: "1.3rem" }}></i>
              </span>
            {/* )} */}

            {userInfo ? (
              <div className="btn-group ">
                <span
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-expanded="false"
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className="bi bi-person-circle"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </span>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <button className="dropdown-item" type="button" onClick={() => {GoToOtherPage("/ca-nhan")}}>
                      Hồ sơ
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        Logout();
                      }}
                      className="dropdown-item"
                      type="button"
                    >
                      Đăng xuất
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                onClick={() => {
                  GoToOtherPage("/dang-nhap");
                }}
                className="header_btn bg-danger text-light"
              >
                Đăng nhập
              </button>
            )}
          </div>
          <div className="header_mob_scene">
            <i
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              className="bi bi-list"
              style={{ fontSize: "2rem" }}
            ></i>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <h5 id="offcanvasRightLabel">Menu</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">...</div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = ({ ...state }) => ({
  global: state.global
});
const mapDispatchToProps = {
  UserLogout: Actions.UserLogout,
};

export default connect(mapState, mapDispatchToProps)(Header);
