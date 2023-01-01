import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from 'containers/AdminSite/Pages/Home';
import { Config, Log } from 'containers/AdminSite/Pages/System';
import { Account, Organ, Permission, Role } from 'containers/AdminSite/Pages/User';
import { Category0, Category1 } from 'containers/AdminSite/Pages/Category';
import menu_config from 'assets/json/menu_config.json'
import Page404 from 'containers/AdminSite/Pages/Page404';
import Profile from 'containers/AdminSite/Pages/Profile';
import Setting from 'containers/AdminSite/Pages/Setting';
import Support from 'containers/AdminSite/Pages/Support';
import { Cookie } from 'common/Cookie';
import { IUserInfo } from 'common/Models';
import Login from 'containers/AdminSite/Pages/Login';
import RestorePassword from 'containers/AdminSite/Pages/RestorePassword';
import Signup from 'containers/AdminSite/Pages/Signup';
import LayoutAdmin from 'containers/AdminSite/Layouts';
import Page401 from 'containers/AdminSite/Pages/Page401';
interface Props {
    Apps: any
}

const AdminRoute = (props: Props) => {  
    const LayoutAdminPaths = ["/profile", "/setting", "/support"];
    const GetPage = (code:String) => {
        switch(code)
        {
            case "Home":
                return <Home />;
            case "Config":
                return <Config />;  
            case "Log":
                return <Log />;
            case "Account":
                return <Account />;
            case "Organ":
                return <Organ />;
            case "Permission":
                return <Permission />;
            case "Role":
                return <Role />; 
            case "Category0":
                return <Category0 />;
            case "Category1":
                return <Category1 />;       
            default:
                return <Page404 />;                                                                                                         
        }        
    }
    const AdminRoutesRender = () => {
        let html = [];
        let rootMenu:any = menu_config.Menu;
        for(let i = 0;i < rootMenu.length;i++)
        {
            let menu = rootMenu[i];
            if(IsMenuOfUser(menu)) {
                LayoutAdminPaths.push(menu.url)
                html.push(<Route key={menu.code} path={menu.url} component={() => GetPage(menu.code)} />)
            }
            if(menu.subMenu && menu.subMenu.length > 0) 
            {
                for(let j = 0;j < menu.subMenu.length;j++)
                {
                    let subMenu = menu.subMenu[j];
                    if(IsMenuOfUser(subMenu)) {
                        LayoutAdminPaths.push(subMenu.url)
                        html.push(<Route key={subMenu.code} path={subMenu.url} component={() => GetPage(subMenu.code)} />)
                    }
                }
            }
        }
        return html;
    }
    const IsMenuOfUser = (menu:any) => {      
        let userInfo:IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));
        if(userInfo && userInfo.UserName == "admin") return true;   
        if(userInfo)
        {
            for(let i = 0;i < userInfo.Menus.length;i++)
            {
              if(userInfo.Menus[i] == menu.code)
              {
                return true
              }
            }
        }
        return false;
    }
    return (
        <div id="app-admin">
            <Route path={LayoutAdminPaths}>
                <LayoutAdmin>
                    <Switch>
                        {AdminRoutesRender()}
                        <Route key="Profile" path="/profile" component={() => <Profile />} />
                        <Route key="Setting" path="/setting" component={() => <Setting />} />
                        <Route key="Support" path="/support" component={() => <Support />} />   
                    </Switch>
                </LayoutAdmin>
            </Route>
            <Route key="Page401" path="/page401" component={() => <Page401 />} />
            <Route key="Login" path="/login" component={() => <Login />} />
            <Route key="Signup" path="/signup" component={() => <Signup />} />
            <Route key="RestorePassword" path='/restore-password' component={() => <RestorePassword />}/>
        </div>
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(AdminRoute);