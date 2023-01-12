import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import Add from "./Add/Add";
import Users from "./Data/Users";
import data from "./Data/Users";
import Edit from "./Edit/Edit";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Table = () => {
  const history = useNavigate();

  const handleDelete = (id) => {
    let index = Users.map(function (e) {
      return e.id;
    }).indexOf(id);

    Users.splice(index, 1);
    history("/crud");
  };

  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  const [isShownEdit, setIsShownEdit] = useState(false);
  const handleClickEdit = (id, name, email, description, price) => {
    // 👇️ toggle shown state
    setIsShownEdit((current) => !current);

    // This shows the edit values
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Description", description);
    localStorage.setItem("Price", price);
    localStorage.setItem("Id", id);
  };

  return (
    <>
      {isShown && (
        <div style={{ zIndex: "50" }}>
          <Add />
        </div>
      )}

      {isShownEdit && (
        <div style={{ zIndex: "50" }}>
          <Edit />
        </div>
      )}
      <div className="main-container">
        <button className="btn-add" onClick={() => handleClick()}>
          Agregar usuario
        </button>
        <div className="table-container">
          <table className="table-items">
            <thead className="table-head">
              <tr>
                <th className="table-title">Nombre completo</th>
                <th className="table-title">Correo electronico</th>
                <th className="table-title">Descripcion</th>
                <th className="table-title">Precio</th>
                <th className="table-title">Opciones</th>
              </tr>
            </thead>
            {data.length > 0 ? (
              <>
                {data.map((user, idx) => (
                  <tbody className="table-body" key={user.id}>
                    <tr style={{ backgroundColor: "#fff" }}>
                      <td className="table-data">{user.Name}</td>
                      <td className="table-data">{user.Email}</td>
                      <td className="table-data">{user.Description}</td>
                      <td className="table-data">
                        {formatter.format(user.Price)}
                      </td>
                      <td className="table-data">
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="btn-delete"
                        >
                          Eliminar
                        </button>

                        <button
                          className="btn-edit"
                          onClick={() =>
                            handleClickEdit(
                              user.id,
                              user.Name,
                              user.Email,
                              user.Description,
                              user.Price
                            )
                          }
                        >
                          Editar
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </>
            ) : (
              <div
                style={{
                  padding: "12px",
                  fontWeight: "bold",
                  textAlign: "center",
                  textIndent: "20px",
                }}
              >
                No hay usuarios registrados
              </div>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
