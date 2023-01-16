import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sideoptions-container">
        <Link to="/">
          <div>Inicio</div>
        </Link>
        <Link to="/login">
          <div>Login</div>
        </Link>
        <Link to="/crud">
          <div>CRUD</div>
        </Link>
        <Link to="/components">
          <div>Componentes</div>
        </Link>
        <Link>
          <div>Blog</div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
