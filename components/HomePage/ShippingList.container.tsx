import React from "react";
import { useSelector } from "react-redux";
import { findByIdAddress } from "../../utils/helpers";

export default function ShippingListContainer() {
  const shippingList = useSelector(
    ({ shipping }: { shipping: any }) => shipping.shipments,
  );

  const shippingIncludeList = useSelector(
    ({ shipping }: { shipping: any }) => shipping.shipmentsIncluded,
  );

  const parseAddressFrom = (shipping: any) => {
    const id_address = shipping.relationships.address_from.data.id;
    const addressFrom = findByIdAddress(id_address, shippingIncludeList);
    return addressFrom.attributes.zip;
  };

  const parseAddresTo = (shipping: any) => {
    const id_address = shipping.relationships.address_to.data.id;
    const addressTo = findByIdAddress(id_address, shippingIncludeList);
    return addressTo.attributes.zip;
  };

  const parseParcel = (shipping: any) => {
    const id_parcel = shipping.relationships?.parcels.data[0].id;
    const parcel_object = findByIdAddress(id_parcel, shippingIncludeList);
    const { attributes } = parcel_object;
    return `${attributes.length}x${attributes.height}x${attributes.width} ${attributes.distance_unit}`;
  };

  const parseParcelPeso = (shipping: any) => {
    const id_parcel = shipping.relationships?.parcels.data[0].id;
    const parcel_object = findByIdAddress(id_parcel, shippingIncludeList);
    const { attributes } = parcel_object;
    return `${attributes.weight} ${attributes.mass_unit}`;
  };

  return (
    <div className="m-3">
      <table className="table">
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Status</th>
            <th scope="col">Origen</th>
            <th scope="col">Destino</th>
            <th scope="col">Tamaño Paquete</th>
            <th scope="col">Peso Paquete</th>
          </tr>
        </thead>
        <tbody>
          {shippingList.map((shipping: any) => {
            return (
              <tr key={shipping.id} className="text-center">
                <th scope="row">{shipping.id}</th>
                <td>{shipping.attributes.status}</td>
                <td>{parseAddressFrom(shipping)}</td>
                <td>{parseAddresTo(shipping)}</td>
                <td>
                  <span className="badge bg-success">
                    {parseParcel(shipping)}
                  </span>
                </td>
                <td>{parseParcelPeso(shipping)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
