import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NormalButton.css";

const NormalButton = () => {
  return (
    <div className="btn-container">
      <button className="btn-normal">Normal Button</button>

      <button className="btn-normal btn-transition">Transition Button</button>

      <div className="split-container">
        <button
          className="btn-split"
          style={{ borderRight: "1px solid #b1afaf" }}
        >
          Split button
        </button>
        <div className="dropdown">
          <button className="btn-split"><FontAwesomeIcon icon={faCaretDown}/></button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>

      <div className="group-container">
        <button className="group">Button</button>
        <button className="group">Group</button>
        <button className="group">Button</button>
        <button className="group">Group</button>
      </div>
    </div>
  );
};

export default NormalButton;
