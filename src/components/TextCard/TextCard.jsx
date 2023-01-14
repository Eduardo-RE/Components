import React from "react";
import Valley from "../../images/valley.jpg";
import "./TextCard.css";

const TextCard = () => {
  return (
    <div className="card-container">
      <div className="card-box-local">
        <div>
          <img className="img-box-local" src={Valley} alt="" />
          <div className="local-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>

      <div className="card-box">
        <img className="img-box" src={Valley} alt="" />
        <div className="text-centered">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </div>
  );
};

export default TextCard;
