import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <div className="box-container">
        <div className="logo">Logo</div>

        <div className="button-container">
            <a href="/" className="button-navbar">Inicio</a>

            <a href="/" className="button-navbar">Compañia</a>

            <a href="/" className="button-navbar">Servicios</a>

            <a href="/" className="button-navbar">Contacto</a>

            <a href="/" className="button-navbar">Blog</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
