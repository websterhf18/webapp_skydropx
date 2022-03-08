import { configureStore } from "@reduxjs/toolkit";

import shipping from "./shippingSlice";

const store = configureStore({
  reducer: {
    shipping,
  },
  devTools: true,
});

export default store;
