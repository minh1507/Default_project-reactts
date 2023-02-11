import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import admin_config from 'assets/json/admin_config.json';
import { Actions } from 'store/Global/Action';
import { Storage } from 'common/Storage';
import { IUserInfo } from 'common/Models';
interface Props {
  Apps: any
}

const Sidebar = (props: Props) => {    
    const DrawSubMenu = (id: any, subMenu: any) => {    
      let html_subMenu:any = [];  
      for(let i = 0;i < subMenu.length;i++)
      {
        if(IsMenuOfUser(subMenu[i])) {
          html_subMenu.push(<NavLink key={"subMenu" + i} className="nav-link" to={subMenu[i].url}><i className={subMenu[i].icon} />{subMenu[i].name}</NavLink>);
        }
      }
      return <ul id={id} className="nav-content collapse " data-bs-parent="#sidebar-nav">{html_subMenu}</ul>;
    }
    const DrawMenu = () => {
      let menu:any = admin_config.menu;
      let html_menu:any = [];
      for(let i = 0;i < menu.length;i++)
      {
        if(IsMenuOfUser(menu[i])) {
          html_menu.push(
            <li key={"li" + i} className="nav-item">
              {
                menu[i].subMenu && menu[i].subMenu.length > 0 ? 
                <>
                  <a className="nav-link collapsed" data-bs-target={"#" + menu[i].code + "-nav"} data-bs-toggle="collapse" href="#">
                    <i className={menu[i].icon}></i><span>{menu[i].name}</span><i className="bi bi-chevron-down ms-auto"></i>
                  </a>
                  {DrawSubMenu(menu[i].code + "-nav", menu[i].subMenu)}
                </> : 
                <NavLink className="nav-link" to={menu[i].url}><i className={menu[i].icon} />{menu[i].name}</NavLink>
              }            
            </li>
          );
        }        
      }           
      return html_menu;
    }
    const IsMenuOfUser = (menu:any) => { 
      let userInfo:IUserInfo = JSON.parse(Storage.getSession("UserInfo"));   
      if(!userInfo)
      {
        return false;
      } 
      if(userInfo.UserName == "admin") return true;   
      if(userInfo != null)
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
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          {DrawMenu()}
        </ul>
      </aside>
    )
}
const mapState = ({ ...state }) => ({
  Apps: state.apps
});
const mapDispatchToProps = {

};

export default connect(mapState, mapDispatchToProps)(Sidebar);