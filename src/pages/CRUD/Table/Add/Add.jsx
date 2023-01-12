import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Users from "../Users";
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
            <input
              placeholder="Nombre completo"
              className="add-input"
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <input
              placeholder="Correo electronico"
              className="add-input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <input
              placeholder="Descripcion"
              className="add-input"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required
            />
            <input
              placeholder="Precio"
              className="add-input"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              required
            />
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
