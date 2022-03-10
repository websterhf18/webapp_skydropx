export type rateData = {
  id: string;
  attributes: {
    days: number;
    amount_local: string;
    provider: string;
    currency_local: string;
  };
};
export type shippingData = {
  id: string;
  attributes: {
    status: string;
  };
  relationships: {
    address_from: any;
    address_to: any;
    parcels: any;
  };
};
