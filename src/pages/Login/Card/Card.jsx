import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../images/logo-social.png";
import "./Card.css";

const Card = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
    setPassword(evnt.target.value);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img className="login-logo" src={Logo} />
        <input
          placeholder="Correo electronico"
          className="email-input"
          type="email"
        />
        <div style={{ position: "relative" }}>
          <input
            placeholder="Contraseña"
            className="email-input"
            type={passwordType}
            value={passwordInput}
            onChange={(e) => handlePasswordChange(e, e)}
          />
          <button
            className="btn-password"
            style={{left: "220px", bottom: "4px"}}
            onClick={togglePassword}
            id="show-password"
          >
            {passwordType === "password" ? (
              <FontAwesomeIcon icon={faEyeSlash} className="eye-icon" />
            ) : (
              <FontAwesomeIcon icon={faEye} className="eye-slash-icon" />
            )}
          </button>
        </div>
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
