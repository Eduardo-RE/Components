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

          <Link>
            <button className="button-navbar">Servicios</button>
          </Link>

          <Link>
            <button className="button-navbar">Contacto</button>
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
