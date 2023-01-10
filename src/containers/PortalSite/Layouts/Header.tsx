import React, { useCallback, useEffect, useState } from 'react'
import { connect } from "react-redux";
import logo from 'assets/img/logoRun.png'
import { useHistory, useLocation } from 'react-router-dom';
import MenuService from 'services/MenuService';

interface Props {
    UserLogout?: Function  
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
    const [change, setchange] = useState(false)
    const [item, setItem] = useState(1)
    const [tree, setTree] = useState<HTreePortal>(null)

 
    const tabbar = () => {
        setchange(!change)
    }

    const GoToOtherPage = (page: string) => {
        setchange(false)
        history.push(page);
        window.scrollTo(0, 0)
    }
   
    const fetchTreePortal = useCallback(async () => {
        let response = await MenuService.GetTreePortal()
        setTree(response)
      }, []) 

    useEffect(() => {   
        fetchTreePortal()

        if(location.pathname == 'trang-chu')
        {
            if(item != 1)
            {
                setItem(1)
            }
        }
        if(location.pathname == '/gioi-thieu')
        {
            if(item != 2)
            {
                setItem(2)
            }
        }
        if(location.pathname == '/khoa-hoc')
        {
            if(item != 3)
            {
                setItem(3)
            }
        }
        if(location.pathname == '/kien-thuc')
        {
            if(item != 4)
            {
                setItem(4)
            }
        }
        if(location.pathname == '/chinh-dang-chay-bo')
        {
            if(item != 5)
            {
                setItem(5)
            }
        }
        if(location.pathname == '/ho-tro')
        {
            if(item != 6)
            {
                setItem(6)
            }
        }
        if(location.pathname == '/gio-hang')
        {
            if(item != 7)
            {
                setItem(7)
            }
        }
        if(location.pathname == '/dang-nhap')
        {
            if(item != 9)
            {
                setItem(9)
            }
        }
        if(location.pathname == '/dang-ky')
        {
            if(item != 10)
            {
                setItem(10)
            }
        }
    }, [location.pathname, item])

    // const Logout = () => {      
    //     props.UserLogout();
    //     history.push('/login');
    //   }

    //   let userInfo:IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));  
    //   console.log("user" + userInfo)

    const navbar = tree && tree.Data?.map((tree:HData) =>
        <div key={tree.Code as number} className='show_catching'>
            <p className="navbar_link catching" onClick={() => {GoToOtherPage(tree.URL as string)}}>{tree.Name}</p>
            {tree.Children.length > 0 && 
            <div className='hide'>
                {tree.Children.map((child:any) => 
                    <div className='kkk'>
                        <p className="navbar_link ddd" onClick={() => {GoToOtherPage(tree.URL as string)}}>{child.Name}</p>
                        {child.Children.length > 0 && 
                          <div className='hides'>
                          {child.Children.map((childrens:HData) => 
                              <div >
                                  <p className="navbar_link" onClick={() => {GoToOtherPage(tree.URL as string)}}>{childrens.Name}</p>
                              </div>
                          )}
                      </div>}
                      
                    </div>
                )}
            </div>
            }
            
            
        </div>
    );

    const navbarMob = tree && tree.Data?.map((tree:HData) =>
        <li key={tree.Code as number} onClick={() => {GoToOtherPage(tree.URL as string)}}>
            <h6 className={`${item == tree.Code ? 'golden': 'unGolden'}`}>{tree.Name}</h6>
        </li>   
    );

    return(
      <div className="headers">
        {change && <div className='mob_scene_in' style={{padding: "20px 10px", color:'white'}}>
            <ul className='mt-2' style={{listStyle: 'none', padding: 0}}>
                {navbarMob}
            </ul>    
        </div>}
        
        <div className="header_top bg-danger text-light ">
            <div className="header_top_container container-xl d-flex align-items-center justify-content-between">
                <div className="header_top_mobile">
                  <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">   
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                        <span className=" header_top_left_text">091 650 2783</span>
                      </div>
                      <div className="carousel-item">
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <span className="header_top_left_text">hocviendangquangmarathon@oao.vn</span>
                      </div>
                    </div>
                  </div>
                </div>

                <span className="header_top_tab">
                    <span>
                        <span><i className="fa-solid fa-phone-volume"></i></span>
                        <span className=" header_top_left_text">091 650 2783</span>
                    </span>
                    <span className="header_top_left_child">
                        <span><i className="fa-solid fa-envelope"></i></span>
                        <span className="header_top_left_text">hocviendangquangmarathon@oao.vn</span>
                    </span>
                </span>
                <span className="d-flex gap-2 align-items-center justify-content-center group_icon">
                    <a href="#" className="header_link h-100" ><i className="fa-brands fa-square-facebook header_icon" style={{verticalAlign: "middle"}}></i></a>
                    <a href="#" className="header_link h-100"><i className="fa-brands fa-square-facebook header_icon" style={{verticalAlign: "middle"}}></i></a>
                    <a href="#" className="header_link h-100"><i className="fa-brands fa-square-facebook header_icon" style={{verticalAlign: "middle"}}></i></a>
                    <a href="#" className="header_link h-100"><i className="fa-brands fa-square-facebook header_icon" style={{verticalAlign: "middle"}}></i></a>
                </span>
            </div>
        </div>
        <div className="header_bottom">
            <div
                className="container-xl d-flex justify-content-between align-items-center h-100 ">
                <div className="d-flex align-items-center error">
                    <img src={logo} className="header_bottom_logo" />
                    <div className="header_bottom_logo_option">
                        <select className="form-select header_bottom_select form-select-sm" aria-label="Default select example">
                            <option value="Vi">Vi</option>
                            <option value="EN">EN</option>
                        </select>
                    </div>
                </div>
                <div className="d-flex navbar_container_main">
                    
                   
                    
                    {navbar}
                    
                </div>
                <div className="d-flex gap-3 align-items-center error_nav">
                    <a href="#" className="header_bottom_link"><i className="bi bi-chat"></i></a>
                    <span style={{cursor:'pointer'}} onClick={() => {GoToOtherPage('/gio-hang')}} className="header_bottom_link"><i className="bi bi-cart"></i></span>
                 
                    <button onClick={() => {GoToOtherPage('/dang-nhap')}} className="header_btn bg-danger text-light" style={{width: '100px'}}>Đăng nhập</button>
                  
                    
                    
                    
                </div>
                <div className='header_mob_scene'>
                    {!change
                    ?
                    <i onClick={() => {tabbar()}} className="bi bi-list" style={{fontSize: '2rem'}}></i>
                    :
                    <i onClick={() => {tabbar()}} className="bi bi-x-lg" style={{fontSize: '2rem'}}></i>
                }
                   
                </div>
            </div>
        </div>
    </div>
    )
}
const mapState = ({ ...state }) => ({
    // UserLogout: Actions.UserLogout
});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(Header);