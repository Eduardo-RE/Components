import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo-social.png";
import "./Card.css";

const Card = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img className="login-logo" src={Logo} />
        <input
          placeholder="Correo electronico"
          className="email-input"
          type="email"
        />
        <input
          placeholder="Contraseña"
          className="email-input"
          type="password"
        />
        <Link to="/login">
          <p className="forgot">¿Olvidaste tu contraseña?</p>
        </Link>
        <button className="btn">Inicia sesion</button>
        <button className="btn">Registrate</button>
        <p className="forgot">ó</p>
        <button className="btn-fb">Facebook</button>
        <button className="btn-gm">Google</button>
        <button className="btn-gh">Github</button>
      </div>
    </div>
  );
};

export default Card;
