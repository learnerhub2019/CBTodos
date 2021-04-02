import React from "react";
import "./header.css";
import {
  faHome,
  faBell,
  faPlus,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="left-control">
          <ul className="menu">
            <li className="menu-item">
              <FontAwesomeIcon icon={faHome} className="menu-item-icon" />
              <NavLink to="/" activeClassName="active">
                TodoList
              </NavLink>
            </li>
            {/* <li className="menu-item">
              <a>Notifications</a>
            </li> */}
          </ul>
        </div>
        <div className="right-control">
          <ul className="menu">
            <li className="menu-item">
              <NavLink to="/add" activeClassName="active">
                <FontAwesomeIcon icon={faPlus} className="menu-item-icon" /> Add
                New
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/add" activeClassName="active">
                <FontAwesomeIcon icon={faBell} className="menu-item-icon" />
                Notification
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink to="/add">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className="menu-item-icon"
                />
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
