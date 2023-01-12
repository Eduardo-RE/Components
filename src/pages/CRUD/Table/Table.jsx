import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import Add from "./Add/Add";
import Users from "./Users";
import data from "./Users";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  // minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

const Table = () => {
  const history = useNavigate();

  const handleDelete = (id) => {
    let index = Users.map(function (e) {
      return e.id;
    }).indexOf(id);

    Users.splice(index, 1);
    //   toast.success("La fila se elimino correctamente", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: false,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });

    history("/crud");
  };

  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);
  };

  return (
    <>
      {isShown && (
        <div style={{ zIndex: "50" }}>
          <Add />
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
                  <tbody className="table-body">
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

                        <button className="btn-edit">Editar</button>
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
