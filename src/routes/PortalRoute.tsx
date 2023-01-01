import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LayoutPortal from 'containers/PortalSite/Layouts';
import TrangChu from 'containers/PortalSite/Pages/TrangChu';
import GioiThieu from 'containers/PortalSite/Pages/GioiThieu';
import ChinhDang from 'containers/PortalSite/Pages/ChinhDang';
import HoTro from 'containers/PortalSite/Pages/HoTro';
import KhoaHoc from 'containers/PortalSite/Pages/KhoaHoc';
import KienThuc from 'containers/PortalSite/Pages/KienThuc';
import ChiTiet from 'containers/PortalSite/Pages/KhoaHoc/ChiTiet';
import HocThu from 'containers/PortalSite/Pages/KhoaHoc/HocThu';
interface Props {
       
}

const PortalRoute = (props: Props) => {  
    return(
        <div id="app-portal">
            <Route path={["/", "/gioi-thieu","/chinh-dang","/ho-tro","/khoa-hoc","/kien-thuc","/chi-tiet","/hoc-thu"]}>
                <LayoutPortal>
                    <Switch>
                        <Route key="TrangChu" exact path="/" component={() => <TrangChu />} />
                        <Route key="GioiThieu" path="/gioi-thieu" component={() => <GioiThieu />} />
                        <Route key="ChinhDang" path="/chinh-dang" component={() => <ChinhDang />} />
                        <Route key="HoTro" path="/ho-tro" component={() => <HoTro />} />
                        <Route key="KhoaHoc" path="/khoa-hoc" component={() => <KhoaHoc />} />
                        <Route key="KienThuc" path="/kien-thuc" component={() => <KienThuc />} />
                        <Route key="KhoaHocChiTiet" path="/chi-tiet" component={() => <ChiTiet />} />
                        <Route key="KhoaHocThu" path="/hoc-thu" component={() => <HocThu />} />
                    </Switch>
                </LayoutPortal>
            </Route>
        </div>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(PortalRoute);