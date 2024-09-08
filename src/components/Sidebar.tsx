import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faMapMarkedAlt,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ContactApp</h1>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link
              to="/contacts"
              className={`nav-item ${
                location.pathname === "/contacts" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faAddressBook} className="icon" />
              Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/maps"
              className={`nav-item ${
                location.pathname === "/maps" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" />
              Maps
            </Link>
          </li>
          <li>
            <Link
              to="/graphs"
              className={`nav-item ${
                location.pathname === "/graphs" ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={faChartLine} className="icon" />
              Graphs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
