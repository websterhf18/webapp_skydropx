/**
 * @format
 * @jest-environment jsdom
 */
import React from "react";
import renderer from "react-test-renderer"; // Note: test renderer must be required after react-native.
import ShippingForm from "../components/HomePage/Shipping.form";

it("Renders the Shipping Form Component", () => {
  const tree = renderer.create(<ShippingForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
