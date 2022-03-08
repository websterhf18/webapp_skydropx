import React from "react";

export default function ShippingListContainer() {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th scope="col">#</th>
          <th scope="col">Destino</th>
          <th scope="col">Origen</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Mejor Opcion?</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <th scope="row">1</th>
          <td>10222</td>
          <td>10222</td>
          <td>UPS</td>
          <td>
            <span className="badge bg-success">Si</span>
          </td>
          <td>
            <button className="btn btn-primary btn-sm">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
