import React from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import Users from "./Users";
import data from "./Users";

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

  return (
    <>
      <div className="main-container">
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
                      <td className="table-data">{user.Price}</td>
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
