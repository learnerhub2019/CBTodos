import React from "react";
import { Redirect, Route } from "react-router-dom";
import USER_ROUTES from "../../../constants/router";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default () => {
  // const history = useHistory();
  let location = useLocation();
  const currentUser = useSelector((state) => state.auth);

  console.log("pathname " + location.pathname);
  // console.log(location.pathname === "/signin");
  // useEffect(() => {
  //   if (currentUser && location.pathname === "/signin") {
  //     console.log(" we reached here");
  //     history.push("/");
  //   }
  // }, [currentUser, location]);

  console.dir(currentUser);

  return USER_ROUTES.map((routeInfo) => (
    <Route
      key={routeInfo.routeId}
      path={routeInfo.path}
      exact={routeInfo.isExact}
    >
      {currentUser && location.pathname !== "/signin" ? (
        <routeInfo.componentName {...routeInfo.componentParams} />
      ) : (
        <Redirect to="/signin" />
      )}
    </Route>
  ));
};
