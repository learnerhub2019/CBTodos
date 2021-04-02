import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../modules/utils/utilsActions";

export default () => {
  const faBarIcon = <FontAwesomeIcon icon={faBars} />;
  const faChevronLeftIcon = <FontAwesomeIcon icon={faChevronLeft} />;
  const { isSideBarOpen } = useSelector((state) => state.utils);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="primary"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand
          onClick={() => {
            dispatch(toggleSidebar(isSideBarOpen));
          }}
        >
          {isSideBarOpen ? faChevronLeftIcon : faBarIcon} TodoHandler
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} exact to="/" activeClassName="active">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/add" activeClassName="active">
              Add
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/today" activeClassName="active">
              Today
            </Nav.Link>
            <Nav.Link as={NavLink} exact to="/dew" activeClassName="active">
              Dew
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              exact
              to="/upcoming"
              activeClassName="active"
            >
              Upcoming
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
