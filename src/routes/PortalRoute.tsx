import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LayoutPortal from "containers/PortalSite/Layouts";
import TrangChu from "containers/PortalSite/Pages/TrangChu";
import portal_config from "assets/json/portal_config.json";
import DangNhap from "containers/PortalSite/auth/DangNhap";
import DangKy from "containers/PortalSite/auth/DangKy";

interface Props {}

const PortalRoute = (props: Props) => {
  const LayoutPortalPaths: any = [];
  const GetPage = (code: String) => {
    switch (code) {
      case "TrangChu":
        return <TrangChu />;
      case "DangNhap":
        return <DangNhap />;
      case "DangKy":
        return <DangKy />;
      default:
        return <></>;
    }
  };
  const IsRouteOfUser = (route: any) => {
    return false;
  };
  const RoutesRender = (isLayout: Boolean) => {
    let routesHtml: any = [];
    let routesConfig: any = portal_config.routes;
    for (let i = 0; i < routesConfig.length; i++) {
      if (!IsRouteOfUser(routesConfig[i]) && routesConfig[i].isMenu) {
        continue;
      }
      if (isLayout && isLayout == routesConfig[i].isLayout) {
        LayoutPortalPaths.push(routesConfig[i].url);
        routesHtml.push(
          <Route
            key={routesConfig[i].code}
            path={routesConfig[i].url}
            component={() => GetPage(routesConfig[i].code)}
          />
        );
      }
      if (!isLayout && isLayout == routesConfig[i].isLayout) {
        routesHtml.push(
          <Route
            key={routesConfig[i].code}
            path={routesConfig[i].url}
            component={() => GetPage(routesConfig[i].code)}
          />
        );
      }
    }

    return routesHtml;
  };
  return (
    <div id="app-portal">
      <Route path={LayoutPortalPaths}>
        <LayoutPortal>
          <Switch>{RoutesRender(true)}</Switch>
        </LayoutPortal>
      </Route>
      {RoutesRender(false)}
    </div>
  );
};
const mapState = ({ ...state }) => ({});
const mapDispatchToProps = {};

export default connect(mapState, mapDispatchToProps)(PortalRoute);
