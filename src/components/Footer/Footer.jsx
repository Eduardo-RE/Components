import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="options-row">
          <h4 className="options-title">Donde comprar</h4>
          <a href="/" className="options">
            Opcion 1
          </a>
        </div>
        <div className="options-row">
          <h4 className="options-title">Redes Sociales</h4>
          <a href="/" className="options">
            Opcion 1
          </a>
          <a href="/" className="options">
            Opcion 2
          </a>
          <a href="/" className="options">
            Opcion 3
          </a>
        </div>
        <div className="options-row">
          <h4 className="options-title">Sitios</h4>
          <a href="/" className="options">
            Opcion 1
          </a>
          <a href="/" className="options">
            Opcion 2
          </a>
          <a href="/" className="options">
            Opcion 3
          </a>
          <a href="/" className="options">
            Opcion 4
          </a>
          <a href="/" className="options">
            Opcion 5
          </a>
          <a href="/" className="options">
            Opcion 6
          </a>
        </div>
        <div className="options-row">
          <h4 className="options-title">Compañia</h4>
          <a href="/" className="options">
            Opcion 1
          </a>
          <a href="/" className="options">
            Opcion 2
          </a>
          <a href="/" className="options">
            Opcion 3
          </a>
          <a href="/" className="options">
            Opcion 4
          </a>
          <a href="/" className="options">
            Opcion 5
          </a>
          <a href="/" className="options">
            Opcion 6
          </a>
          <a href="/" className="options">
            Opcion 7
          </a>
        </div>
      </div>
      <div className="end-footer">
        <div className="end-footer-txt">
          <div className="end-footer-name">@2018 RED-DEV CORPORATION OF MEXICO</div>
          <div className="end-footer-terms">TERMS AND CONDITIONS PRIVAY POLICY/YOUR BAJA CALIFORNIA PRIVACY RIGHTS</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
