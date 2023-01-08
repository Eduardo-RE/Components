import React from "react";
import "./NormalButton.css";

const NormalButton = () => {
  return (
    <div className="btn-container">
      <button className="btn-normal">Normal Button</button>
      <button className="btn-normal btn-transition">Transition Button</button>
      <button className="btn-normal">Normal Button</button>
      <button class="btn">Button</button>
      <div class="dropdown">
        <button class="btn">
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default NormalButton;
