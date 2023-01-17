import {
  faCircleArrowLeft,
  faComment,
  faCompass,
  faDragon,
  faHome,
  faTable,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      <div className={`${navActive ? "desplegado" : ""} sidebar-container`}>
        <div className="icon-logo">
          <FontAwesomeIcon icon={faDragon} />
          <div className="sidebar-logo">APP</div>
        </div>
        <hr className="line-logo" />
        <div className="sideoptions-container">
          <Link to="/">
            <div className="button-sidebar-container">
              <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
              <div className="button-sidebar">Inicio</div>
            </div>
          </Link>
          <Link to="/login">
            <div className="button-sidebar-container">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
              <div className="button-sidebar">Login</div>
            </div>
          </Link>
          <Link to="/crud">
            <div className="button-sidebar-container">
              <FontAwesomeIcon icon={faTable} style={{ marginRight: "10px" }} />
              <div className="button-sidebar">CRUD</div>
            </div>
          </Link>
          <Link to="/components">
            <div className="button-sidebar-container">
              <FontAwesomeIcon
                icon={faCompass}
                style={{ marginRight: "10px" }}
              />
              <div className="button-sidebar">Componentes</div>
            </div>
          </Link>
          <Link>
            <div className="button-sidebar-container">
              <FontAwesomeIcon
                icon={faComment}
                style={{ marginRight: "10px" }}
              />
              <div className="button-sidebar">Blog</div>
            </div>
          </Link>

          <div className="deploy-icon" onClick={() => setNavActive(!navActive)}>
            <div className="icon-text">Reducir</div>
            <FontAwesomeIcon icon={faCircleArrowLeft} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
