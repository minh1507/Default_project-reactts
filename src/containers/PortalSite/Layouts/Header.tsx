import React from 'react'
import { connect } from "react-redux";
import logo from 'assets/img/logoRun.png'
import CButton from 'components/CButton';
import { useHistory } from 'react-router-dom';


interface Props {

}



const Header = (props: Props) => {  

    const history = useHistory();

    const GoToOtherPage = (page: string) => {
        history.push(page);
    }
    
    return(
      <div className="headers">
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
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
                    <a href="#" className="header_link"><i className="fa-brands fa-square-facebook header_icon"></i></a>
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
                <nav className="d-flex navbar_container_main">
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/')}}>Trang chủ</p>
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/gioi-thieu')}}>Giới thiệu</p>
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/khoa-hoc')}}>Khóa học</p>
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/kien-thuc')}}>Kiến thức</p>
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/chinh-dang')}}>Chỉnh dáng chạy bộ</p>
                    <p className="navbar_link" onClick={() => {GoToOtherPage('/ho-tro')}}>Hỗ trợ</p>
                </nav>
                <div className="d-flex gap-3 align-items-center error_nav">
                    <a href="#" className="header_bottom_link"><i className="bi bi-chat"></i></a>
                    <a href="../Cart/cart.html" className="header_bottom_link"><i className="bi bi-cart"></i></a>
                    <CButton title='Đăng nhập'/>
                    
                </div>
            </div>
        </div>
        
    </div>
    )
}
const mapState = ({ ...state }) => ({

});
const mapDispatchToProps = {
};

export default connect(mapState, mapDispatchToProps)(Header);