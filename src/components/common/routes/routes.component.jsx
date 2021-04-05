import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import USER_ROUTES from "../../../constants/router";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
  const history = useHistory();
  let location = useLocation();
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("pathname " + location.pathname);
    console.log("curentuser" + currentUser);
    console.log(location.pathname === "/signin");
    if (currentUser && location.pathname === "/signin") {
      console.log(" we reached here");
      history.push("/");
    }
    if (!currentUser) {
      history.push("/signin");
    }
  }, [currentUser]);

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
