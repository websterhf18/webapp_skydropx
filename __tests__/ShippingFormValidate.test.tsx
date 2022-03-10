/**
 * @format
 * @jest-environment jsdom
 */
import React from "react";
import ShippingForm from "../components/Forms/Shipping.form";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  errorMessageConstants,
  formTestConstants,
} from "../utils/constants/formTest";

// testing if company form is working
describe("Shipping Form Component", () => {
  it("Error Validations test", async () => {
    const handleSubmit = jest.fn();
    render(<ShippingForm onSubmit={handleSubmit} />);

    const sendSubmitButton = screen.getByTestId("send_submit_test");
    userEvent.click(sendSubmitButton);
    await waitFor(() => {
      expect(screen.getAllByText(errorMessageConstants.errorCodigoOrigen))
        .toBeInTheDocument;
      expect(screen.getAllByText(errorMessageConstants.errorCodigoDestino))
        .toBeInTheDocument;
      expect(screen.getAllByText(errorMessageConstants.errorAltura))
        .toBeInTheDocument;
      expect(screen.getAllByText(errorMessageConstants.errorAncho))
        .toBeInTheDocument;
      expect(screen.getAllByText(errorMessageConstants.errorLargo))
        .toBeInTheDocument;
      expect(screen.getAllByText(errorMessageConstants.errorPeso))
        .toBeInTheDocument;
    });
  });
  /**it("Success test", async () => {
    const handleSubmit = jest.fn();
    const formComponent = render(<ShippingForm onSubmit={handleSubmit} />);

    const codigoOrigenTest = formComponent.getByTestId("codigo_origen_test");
    userEvent.type(codigoOrigenTest, formTestConstants.testCodigoOrigen);

    const codigoDestinoTest = formComponent.getByTestId("codigo_destino_test");
    userEvent.type(codigoDestinoTest, formTestConstants.testCodigoDestino);

    const pesoTest = formComponent.getByTestId("peso_test");
    fireEvent.change(pesoTest, {
      target: { value: formTestConstants.testPeso },
    });

    const alturaTest = formComponent.getByTestId("altura_test");
    fireEvent.change(alturaTest, {
      target: { value: formTestConstants.testPeso },
    });

    const anchoTest = formComponent.getByTestId("ancho_test");
    fireEvent.change(anchoTest, {
      target: { value: formTestConstants.testPeso },
    });

    const largoTest = formComponent.getByTestId("largo_test");
    fireEvent.change(largoTest, {
      target: { value: formTestConstants.testPeso },
    });

    const sendSubmitButton = screen.getByTestId("send_submit_test");
    userEvent.click(sendSubmitButton);

    await waitFor(() => {
      expect(handleSubmit.mock).toHaveBeenCalledWith({
        altura: 1,
        ancho: 1,
        codigo_destino: "44100",
        codigo_origen: "02900",
        largo: 1,
        peso: 1,
      });
    });

    expect(handleSubmit).toBeCalledTimes(1);
  });**/
});
