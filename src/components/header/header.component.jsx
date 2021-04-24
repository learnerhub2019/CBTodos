import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronLeft,
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, closeSideBar } from "../../modules/utils/utilsActions";
import { signOut } from "../../modules/auth/authActions";

export default () => {
  const faBarIcon = <FontAwesomeIcon icon={faBars} />;
  const faChevronLeftIcon = <FontAwesomeIcon icon={faChevronLeft} />;
  const { isSideBarOpen } = useSelector((state) => state.utils);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(closeSideBar());
  };

  return (
    <>
      {currentUser && (
        <Navbar
          // collapseOnSelect
          // expand="lg"
          bg="primary"
          variant="dark"
          sticky="top"
          className="d-flex justify-content-between"
        >
          <Navbar.Brand
            onClick={() => {
              dispatch(toggleSidebar(isSideBarOpen));
            }}
          >
            {isSideBarOpen ? faChevronLeftIcon : faBarIcon}{" "}
            {process.env.REACT_APP_NAME}
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          {/* <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          > */}
          <Nav>
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">
              <FontAwesomeIcon icon={faHome} />
            </Nav.Link>
            {currentUser && (
              <Nav.Link onClick={handleSignOut}>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </Nav.Link>
            )}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Navbar>
      )}
    </>
  );
};
