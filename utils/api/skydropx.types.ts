export type AddressFrom = {
  province: string;
  city: string;
  name: string;
  zip: string;
  country: string;
  address1: string;
  company: string;
  address2: string;
  phone: string;
  email: string;
};
export type AddressTo = {
  province: string;
  city: string;
  name: string;
  zip: string;
  country: string;
  address1: string;
  company: string;
  address2: string;
  phone: string;
  email: string;
  reference: string;
  contents: string;
};
export type Parcel = {
  weight: number;
  distance_unit: string;
  mass_unit: string;
  height: number;
  width: number;
  length: number;
};
export type createShipmentsRequest = {
  address_from: AddressFrom;
  parcels: Array<Parcel>;
  address_to: AddressTo;
  consignment_note_class_code: string;
  consignment_note_packaging_code: string;
};
export type createShipmentsResponse = {
  data: {
    id: string;
    type: string;
  };
  included: Array<any>;
};
export type getShipmentsResponse = {
  data: {
    id: string;
    type: string;
  };
  included: Array<any>;
  links: {
    self: string;
    first: string;
    prev: string;
    next: string;
    last: string;
  };
};
export type createLabelRequest = {
  rate_id: number;
  label_format: string;
};
export type createLabelResponse = {
  data: {
    id: string;
    type: string;
    attributes: {
      label_url: string;
      status: string;
    };
  };
};
