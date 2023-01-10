import React from "react";
import "./Table.css";

const Table = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th className="table-title">Nombre completo</th>
            <th className="table-title">Correo electronico</th>
            <th className="table-title">Descripcion</th>
            <th className="table-title">Precio</th>
            <th className="table-title">Opciones</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr style={{ backgroundColor: "#fff" }}>
            <td className="table-data">Si</td>
            <td className="table-data">Si</td>
            <td className="table-data">Si</td>
            <td className="table-data">Si</td>
            <td className="table-data">Si</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
