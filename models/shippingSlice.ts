import { createSlice } from "@reduxjs/toolkit";

const shippingSlice = createSlice({
  name: "shipping",
  initialState: {
    shippingList: [],
  },
  reducers: {
    setShippingList: (state, action) => {
      state.shippingList = action.payload;
    },
  },
});

export const { setShippingList } = shippingSlice.actions;

export default shippingSlice.reducer;
