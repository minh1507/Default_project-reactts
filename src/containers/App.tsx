
import React, { useEffect, useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'assets/css/global.css';
import 'assets/scss/admin.scss';
import 'assets/scss/portal.scss';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PortalRoute from 'routes/PortalRoute';
import AdminRoute from 'routes/AdminRoute';
interface Props {
    Apps: any
}

const App = (props: Props) => {    
    return (         
        <Router> 
            <Switch>          
                <PortalRoute />          
                {/* <AdminRoute /> */}
            </Switch>                                
        </Router> 
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(App);