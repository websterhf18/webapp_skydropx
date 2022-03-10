import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    rates: [],
    shipments: [],
    shipmentsIncluded: [],
    tabStatus: "form",
    errorStatus: false,
  },
  reducers: {
    setRates: (state, action) => {
      state.rates = action.payload;
    },
    setShipments: (state, action) => {
      state.shipments = action.payload;
    },
    setShipmentsIncluded: (state, action) => {
      state.shipmentsIncluded = action.payload;
    },
    setTabStatus: (state, action) => {
      state.tabStatus = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.errorStatus = action.payload;
    },
  },
});

export const {
  setRates,
  setTabStatus,
  setShipments,
  setShipmentsIncluded,
  setErrorStatus,
} = shippingSlice.actions;

export default shippingSlice.reducer;
