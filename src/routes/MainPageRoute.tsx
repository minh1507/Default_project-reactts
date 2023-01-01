import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from 'components/Home';
import { Config, Log } from 'components/System';
import { Account, Organ, Permission, Role } from 'components/User';
import { CategoryTrangThai } from 'components/Category';
import menu_config from 'assets/json/menu_config.json'
import Page404 from 'components/common/Page404';
import Profile from 'components/common/Profile';
import Page401 from 'components/common/Page401';
import { Cookie } from 'helpers/cookie';
import { IUserInfo } from 'models/Apps';
import Setting from 'components/common/Setting';
import Support from 'components/common/Support';


interface Props {
    Apps: any
}

const MainPageRoute = (props: Props) => {  
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
            default:
                return <Page404 />;                                                                                                         
        }        
    }
    const RouteRender = () => {
        let html = [];
        let rootMenu:any = menu_config.Menu;
        for(let i = 0;i < rootMenu.length;i++)
        {
            let menu = rootMenu[i];
            if(IsMenuOfUser(menu)) {
                html.push(<Route key={menu.code} path={menu.url} component={() => GetPage(menu.code)} />)
            }
            if(menu.subMenu && menu.subMenu.length > 0) 
            {
                for(let j = 0;j < menu.subMenu.length;j++)
                {
                    let subMenu = menu.subMenu[j];
                    if(IsMenuOfUser(subMenu)) {
                        html.push(<Route key={subMenu.code} path={subMenu.url} component={() => GetPage(subMenu.code)} />)
                    }
                }
            }
        }
        return html;
    }
    const IsMenuOfUser = (menu:any) => {      
        let userInfo:IUserInfo = JSON.parse(Cookie.getCookie("UserInfo"));
        if(userInfo.UserName == "admin") return true;   
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
    return(
        <Switch>
            {RouteRender()}
            <Route key="Profile" path="/profile" component={() => <Profile />} />
            <Route key="Setting" path="/setting" component={() => <Setting />} />
            <Route key="Support" path="/support" component={() => <Support />} />
            <Route key="401" path="/page401" component={() => <Page401 />} />
            <Route key="404" path="/page404" component={() => <Page404 />} />         
        </Switch>
    )
}
const mapState = ({ ...state }) => ({
    Apps: state.apps
});
const mapDispatchToProps = {
    
};

export default connect(mapState, mapDispatchToProps)(MainPageRoute);