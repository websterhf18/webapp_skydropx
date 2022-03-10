import _ from "lodash";
import { ShippingFormValues } from "../../components/Forms/Shipping.form";
import {
  AddressFrom,
  AddressTo,
  createShipmentsResponse,
  Parcel,
} from "../api/skydropx.types";
import { BASE_REQUEST } from "../constants";

export const combineFormWithBase = (valuesForm: ShippingFormValues) => {
  const { address_from, address_to } = BASE_REQUEST;
  const newOrigen: AddressFrom = {
    ...address_from,
    zip: valuesForm.codigo_origen,
  };
  const newDestino: AddressTo = {
    ...address_to,
    zip: valuesForm.codigo_destino,
  };
  const newMedidas: Array<Parcel> = [
    {
      weight: valuesForm.peso || 0,
      distance_unit: "CM",
      mass_unit: "KG",
      height: valuesForm.altura || 0,
      width: valuesForm.ancho || 0,
      length: valuesForm.largo || 0,
    },
  ];
  return {
    ...BASE_REQUEST,
    address_from: newOrigen,
    address_to: newDestino,
    parcels: newMedidas,
  };
};

export const cleanResponseRates = (response: createShipmentsResponse) => {
  const { included } = response;
  const newRates = _.filter(included, (include) => {
    return include.type === "rates";
  });
  const orderRates = _.orderBy(
    newRates,
    ["attributes.days", "attributes.amount_local"],
    ["asc", "asc"],
  );
  return orderRates;
};
export const findByIdAddress = (id: string, arrayIncludes: Array<any>) => {
  const objectInclude = _.filter(arrayIncludes, (include) => {
    return include.id === id;
  });
  const [objectFirst] = objectInclude;
  return objectFirst;
};
