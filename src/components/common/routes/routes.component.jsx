import React from "react";
import { Route } from "react-router-dom";
import USER_ROUTES from "../../../constants/router"

export default () => {
  return USER_ROUTES.map((routeInfo) => (
    <Route
      key={routeInfo.routeId}
      path={routeInfo.path}
      exact={routeInfo.isExact}
    >
      <routeInfo.componentName {...routeInfo.componentParams} />
    </Route>
  ));
};
