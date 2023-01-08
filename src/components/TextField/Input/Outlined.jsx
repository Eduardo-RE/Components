// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' 
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
        <input placeholder=" " type="text" />
        <label>Outlined</label>
      </div>

      <div className="material-textfield" style={{ marginLeft: "20px" }}>
        <input placeholder=" " type="number" />
        <label>Number</label>
      </div>

      <div className="material-textfield" style={{ marginLeft: "20px" }}>
        <input placeholder=" " type="time" />
        <label>Time</label>
      </div>

      <div className="material-textfield" style={{ marginLeft: "20px" }}>
        <input
          placeholder=" "
          type={passwordType}
          value={passwordInput}
          onChange={(e) => handlePasswordChange(e, e)}
        />
        <label>Password</label>
        {/* <button
          className="absolute left-56 bottom-3"
          onClick={togglePassword}
          id="show-password"
        >
          {passwordType === "password" ? (
            <FontAwesomeIcon icon={solid('user-secret')} />
          ) : (
            <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
          )}
        </button> */}
      </div>
    </div>
  );
};

export default Outlined;
