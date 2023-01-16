import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="box-container">
        <div className="logo">Logo</div>

        <div className="button-container">
          <Link to="/">
            <button className="button-navbar">Inicio</button>
          </Link>

          <Link to="/login">
            <button className="button-navbar">Login</button>
          </Link>

          <Link to="/crud">
            <button className="button-navbar">CRUD</button>
          </Link>

          <Link to="/components">
            <button className="button-navbar">Componentes</button>
          </Link>

          <Link>
            <button className="button-navbar">Blog</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
