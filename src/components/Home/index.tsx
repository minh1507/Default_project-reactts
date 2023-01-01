import { Cookie } from 'helpers/cookie';
import { IResponseMessage } from 'models/Apps';
import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
interface Props {
       
}

const Home = (props: Props) => {
    const [items, setItems] = useState<any>();
    useEffect(() => {
   
    }, [])  
    const DashboardRender = () => {
        let html = [];
        if(items) {
            for(let i = 0;i < items.length;i++)
            {
                html.push(<p><b>- {items[i].TenThuTuc}</b></p>)
                if(items[i].HoSoDVC)
                {
                    html.push(
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card info-card customers-card">
                                <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                    <h5 className="card-title">Hồ sơ địa chính <span>chờ tiếp nhận</span></h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-file-text" />
                                        </div>
                                        <div className="ps-3">
                                        <h6><Link to="/hosoxuly">{items[i] ? items[i].HoSoChoTiepNhan: 0}</Link></h6>
                                        {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="col-md-3">
                            <div className="card info-card sales-card">
                                <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                <h5 className="card-title">Hồ sơ địa chính <span>đang xử lý</span></h5>
                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-file-text" />
                                    </div>
                                    <div className="ps-3">
                                    <h6><Link to="/hosoxuly">{items[i] ? items[i].HoSoDangXyLy: 0}</Link></h6>
                                    {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card info-card revenue-card">
                                <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                <h5 className="card-title">Hồ sơ địa chính <span>trả kết quả</span></h5>
                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-file-text" />
                                    </div>
                                    <div className="ps-3">
                                    <h6><Link to="/hosoxuly">{items[i] ? items[i].HoSoTraKetQua: 0}</Link></h6>
                                    {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="card info-card customers-card">
                                <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                    <h5 className="card-title">Hồ sơ địa chính <span>hủy</span></h5>
                                    <div className="d-flex align-items-center">
                                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        <i className="bi bi-file-text" />
                                        </div>
                                        <div className="ps-3">
                                        <h6><Link to="/hosoxuly">{items[i] ? items[i].HoSoHuy: 0}</Link></h6>
                                        {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>                               
                        </div>
                    );
                }
                else
                {
                    html.push(
                        <div className="row">
                        <div className="col-md-3">
                        <div className="card info-card customers-card">
                            <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                <h5 className="card-title">Hồ sơ phản ánh <span>chờ tiếp nhận</span></h5>
                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-file-text" />
                                    </div>
                                    <div className="ps-3">
                                    <h6><Link to="/hosoxuly-phananh">{items[i] ? items[i].HoSoChoTiepNhan: 0}</Link></h6>
                                    {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-md-3">
                        <div className="card info-card sales-card">
                            <div className="card-body" style={{padding: "0 0 0 50px"}}>
                            <h5 className="card-title">Hồ sơ phản ánh <span>đang xử lý</span></h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-file-text" />
                                </div>
                                <div className="ps-3">
                                <h6><Link to="/hosoxuly-phananh">{items[i] ? items[i].HoSoDangXyLy: 0}</Link></h6>
                                {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card info-card revenue-card">
                            <div className="card-body" style={{padding: "0 0 0 50px"}}>
                            <h5 className="card-title">Hồ sơ phản ánh <span>trả kết quả</span></h5>
                            <div className="d-flex align-items-center">
                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-file-text" />
                                </div>
                                <div className="ps-3">
                                <h6><Link to="/hosoxuly-phananh">{items[i] ? items[i].HoSoTraKetQua: 0}</Link></h6>
                                {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-3">
                        <div className="card info-card customers-card">
                            <div className="card-body" style={{padding: "0 0 0 50px"}}>
                                <h5 className="card-title">Hồ sơ phản ánh <span>hủy</span></h5>
                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                    <i className="bi bi-file-text" />
                                    </div>
                                    <div className="ps-3">
                                    <h6><Link to="/hosoxuly-phananh">{items[i] ? items[i].HoSoHuy: 0}</Link></h6>
                                    {/* <span className="small pt-1 fw-bold">150</span> <span className="text-muted small pt-2 ps-1">mô tả</span> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>                               
                    </div>
                    );
                }
            }
        }
        return html;
    }
    return(
        <section className="section dashboard">

        </section>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(Home);