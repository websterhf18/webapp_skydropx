import { ShippingFormValues } from "../../components/Forms/Shipping.form";
import { createShipmentsRequest } from "../api/skydropx.types";

export const INITIAL_VALUES: ShippingFormValues = {
  codigo_origen: "",
  codigo_destino: "",
  peso: undefined,
  altura: undefined,
  ancho: undefined,
  largo: undefined,
};

export const BASE_URL = "https://api-demo.skydropx.com/v1";
export const API_KEY = "Fk09kz3ivwbM4sImxQbgd8AGekxAncWWghk4Otv2fiYt";

export const BASE_REQUEST: createShipmentsRequest = {
  address_from: {
    province: "Ciudad de México",
    city: "Azcapotzalco",
    name: "Jose Fernando",
    zip: "02900",
    country: "MX",
    address1: "Av. Principal #234",
    company: "skydropx",
    address2: "Centro",
    phone: "5555555555",
    email: "skydropx@email.com",
  },
  parcels: [
    {
      weight: 3,
      distance_unit: "CM",
      mass_unit: "KG",
      height: 10,
      width: 10,
      length: 10,
    },
  ],
  address_to: {
    province: "Jalisco",
    city: "Guadalajara",
    name: "Jorge Fernández",
    zip: "44100",
    country: "MX",
    address1: " Av. Lázaro Cárdenas #234",
    company: "-",
    address2: "Americana",
    phone: "5555555555",
    email: "ejemplo@skydropx.com",
    reference: "Frente a tienda de abarro",
    contents: "paquete prueba",
  },
  consignment_note_class_code: "53131600",
  consignment_note_packaging_code: "1H1",
};
