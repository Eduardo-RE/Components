import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Users from "../Users";
import "./Edit.css";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const history = useNavigate();

  const [isShown, setIsShown] = useState(true);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  let index = Users.map(function (e) {
    return e.id;
  }).indexOf(id);

  const handleSubmit = (e) => {
    setIsShown((current) => !current);

    e.preventDefault();

    let a = Users[index];
    a.Name = name;
    a.Email = email;
    a.Description = description;
    a.Price = price;

    history("/crud");
  };

  useEffect(() => {
    setName(localStorage.getItem("Name"));
    setEmail(localStorage.getItem("Email"));
    setDescription(localStorage.getItem("Description"));
    setPrice(localStorage.getItem("Price"));
    setId(localStorage.getItem("Id"));
  }, []);

  return (
    <>
      {isShown && (
        <div className="edit-container">
          <div className="edit-box">
            <input
              placeholder="Nombre completo"
              className="edit-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
            />
            <input
              placeholder="Correo electronico"
              className="edit-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
            <input
              placeholder="Descripcion"
              className="edit-input"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              required
            />
            <input
              placeholder="Precio"
              className="edit-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              required
            />
            <button className="edit-btn" onClick={(e) => handleSubmit(e, e)}>
              Actualizar
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

export default Edit;
