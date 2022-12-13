import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Login from 'components/common/Login';
import Register from 'components/common/Signup';
import Page404 from 'components/common/Page404';
import RestorePassword from 'components/common/RestorePassword';
import Portal from 'components/Portal';
interface Props {
       
}

const FullPageRoute = (props: Props) => {  
    return(
        <Switch>
            <Route key="Portal" exact path="/" component={() => <Portal />} />
            <Route key="Login" path="/Login" component={() => <Login />} />
            <Route key="Register" path="/register" component={() => <Register />} />
            <Route key="404" path="*" component={() => <Page404 />} />
            <Route key="RestorePassword" path='/restore-password' component={() => <RestorePassword />}/>
        </Switch>
    )
}
const mapState = ({ ...state }) => ({
    
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(FullPageRoute);