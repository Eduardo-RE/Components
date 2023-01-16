import {
  faCircleArrowLeft,
  faComment,
  faCompass,
  faHome,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">Logo</div>
      <hr class="line-logo" />
      <div className="sideoptions-container">
        <Link to="/">
          <div className="button-sidebar-container">
            <FontAwesomeIcon icon={faHome} style={{ marginRight: "5px" }} />
            <div className="button-sidebar">Inicio</div>
          </div>
        </Link>
        <Link to="/login">
          <div className="button-sidebar-container">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} />
            <div className="button-sidebar">Login</div>
          </div>
        </Link>
        <Link to="/crud">
          <div className="button-sidebar-container">
            <FontAwesomeIcon icon={faTable} style={{ marginRight: "5px" }} />
            <div className="button-sidebar">CRUD</div>
          </div>
        </Link>
        <Link to="/components">
          <div className="button-sidebar-container">
            <FontAwesomeIcon icon={faCompass} style={{ marginRight: "5px" }} />
            <div className="button-sidebar">Componentes</div>
          </div>
        </Link>
        <Link>
          <div className="button-sidebar-container">
            <FontAwesomeIcon icon={faComment} style={{ marginRight: "5px" }} />
            <div className="button-sidebar">Blog</div>
          </div>
        </Link>

        <div className="deploy-icon">
          <div className="icon-text">Reducir</div>
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
