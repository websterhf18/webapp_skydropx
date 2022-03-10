/**
 * @format
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer"; // Note: test renderer must be required after react-native.
import LabelErrorAlert from "../components/Alerts/LabelError.alert";

import { Provider } from "react-redux";
import store from "../models/index";

it("Renders the Label Error Alert Component", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <LabelErrorAlert showAlert={true} />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
