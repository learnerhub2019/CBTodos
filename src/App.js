import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HeaderComponent, SideMenu, RouterComponent } from "./components";
import "./styles.css";
// import _ from 'lodash';
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function App() {
  const { isSideBarOpen } = useSelector((state) => state.utils);
  console.log("app is " + isSideBarOpen);
  return (
    <div className="App">
      <Router>
        <SideMenu />
        <div
          id="content"
          className={`page-content ${isSideBarOpen ? "active" : ""}`}
        >
          <HeaderComponent />
          <Container fluid className="page-container">
            <Switch>
              <RouterComponent />
            </Switch>
          </Container>
        </div>
      </Router>
    </div>
  );
}
