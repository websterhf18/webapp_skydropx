import React from "react";
import { useDispatch } from "react-redux";
import { setErrorStatus } from "../../models/shippingSlice";

type Props = {
  showAlert: boolean;
};

export default function LabelErrorAlert({ showAlert }: Props) {
  const dispatch = useDispatch();
  const closeAlert = () => {
    dispatch(setErrorStatus(!showAlert));
  };
  return (
    <div
      className={`my-alert-top alert alert-danger alert-dismissible ${
        showAlert ? "d-block" : "d-none"
      }`}
    >
      <strong>Error!</strong> No se puede abrir el documento
      <button type="button" className="btn-close" onClick={closeAlert}></button>
    </div>
  );
}
