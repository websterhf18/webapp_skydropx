import React from "react";

export default function ShippingCompaniesContainer() {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th scope="col">#</th>
          <th scope="col">Proveedor</th>
          <th scope="col">Precio</th>
          <th scope="col">Tiempo entrega</th>
          <th scope="col"></th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-center">
          <th scope="row">1</th>
          <td>UPS</td>
          <td>$000</td>
          <td>2 days</td>
          <td>
            <span className="badge bg-success">Mejor opcion</span>
          </td>
          <td>
            <button className="btn btn-primary btn-sm">Elegir</button>
          </td>
        </tr>
        <tr className="text-center">
          <th scope="row">2</th>
          <td>UPS</td>
          <td>$000</td>
          <td>2 days</td>
          <td></td>
          <td>
            <button className="btn btn-primary btn-sm">Elegir</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
