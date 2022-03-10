/**
 * @format
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer"; // Note: test renderer must be required after react-native.
import ShippingRateCard from "../components/HomePage/ShippingRate.card";
import { rateData } from "../utils/helpers/types";

import { Provider } from "react-redux";
import store from "../models/index";

const rateDataTest: rateData = {
  id: "000",
  attributes: {
    days: 0,
    amount_local: "139",
    provider: "UPS",
    currency_local: "MXN",
  },
};

it("Renders the Shipping Rate Card Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <ShippingRateCard indexCard={0} rateData={rateDataTest} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
