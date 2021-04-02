import React from "react";
import "./sidemenu.css";
import UserProfile from "../../resources/userprofile.jpg";
import { Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

export default ({ SideMenuPages, isActive }) => {
  const { isSideBarOpen } = useSelector((state) =>  state.utils);

  return (
    <div
      id="sidebar"
      className={`vertical-nav bg-white ${isSideBarOpen ? "active" : ""}`}
    >
      <div className="py-4 px-3 mb-4 bg-light">
        <div className="media d-flex align-item-center">
          <img
            src={UserProfile}
            alt=".."
            width="80"
            height="80"
            className="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <div className="media-body">
            <h4 className="m-0">Parag </h4>
            <p className="font-weight-normal text-muted mb-o"> Web Developer</p>
          </div>
        </div>
      </div>
      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Dashboard
      </p>
      <Nav defaultActiveKey="/home" className="nav flex-column bg-white mb-0">
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Member
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        User Profile
      </p>
      <Nav defaultActiveKey="/home" className="nav flex-column bg-white mb-0">
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home" className="nav-link text-dark">
            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>
            Member
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
