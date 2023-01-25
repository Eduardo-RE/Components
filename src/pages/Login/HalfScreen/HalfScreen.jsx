import React from "react";

const HalfScreen = () => {
  return (
    <div className="screen-container">
      <div className="first-container">
        <div className="material-textfield">
          <input className="input" placeholder=" " type="text" />
          <label className="label">Outlined</label>
        </div>
      </div>
      <div className="second-container"></div>
    </div>
  );
};

export default HalfScreen;
