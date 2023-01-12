import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Users from "../Data/Users";
import "./Add.css";

const Add = () => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const history = useNavigate();

  const handleSubmit = () => {
    setIsShown((current) => !current);

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name,
      c = email,
      d = description,
      e = price;

    Users.push({
      id: uniqueId,
      Name: a,
      Email: c,
      Description: d,
      Price: e,
    });
    history("/crud");
  };

  return (
    <>
      {isShown && (
        <div className="add-container">
          <div className="add-box">

            <div className="add-material-textfield">
              <input
                className="add-input"
                placeholder=" "
                type="text"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="add-label">Nombre completo</label>
            </div>

            <div className="add-material-textfield">
              <input
                className="add-input"
                placeholder=" "
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="add-label">Correo electronico</label>
            </div>

            <div className="add-material-textfield">
              <input
                className="add-input"
                placeholder=" "
                type="text"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label className="add-label">Descripcion</label>
            </div>

            <div className="add-material-textfield">
              <input
                className="add-input"
                placeholder=" "
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <label className="add-label">Precio</label>
            </div>

            <button className="add-btn" onClick={(e) => handleSubmit(e, e)}>
              Agregar
            </button>
            <button className="cancel-btn" onClick={handleClick}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Add;
