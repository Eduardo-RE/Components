import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Outlined.css";

const Outlined = () => {
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
    <div className="texfield-container">
      <div className="material-textfield">
        <input className="input" placeholder=" " type="text" />
        <label className="label">Outlined</label>
      </div>

      <div className="material-textfield">
        <input className="input" placeholder=" " type="number" />
        <label className="label">Number</label>
      </div>

      <div className="material-textfield">
        <input className="input" placeholder=" " type="time" />
        <label className="label">Time</label>
      </div>

      <div className="material-textfield">
        <input
          className="input"
          placeholder=" "
          type={passwordType}
          value={passwordInput}
          onChange={(e) => handlePasswordChange(e, e)}
        />
        <label className="label">Password</label>
        <button
          className="btn-password"
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
    </div>
  );
};

export default Outlined;
