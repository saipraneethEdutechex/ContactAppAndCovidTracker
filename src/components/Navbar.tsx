import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">ContactApp</div>
      <div className="navbar-actions">
        <button className="action-button user">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="action-button logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
