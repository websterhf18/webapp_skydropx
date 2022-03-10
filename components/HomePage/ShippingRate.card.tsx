import React from "react";
import { useDispatch } from "react-redux";
import { setErrorStatus } from "../../models/shippingSlice";

import skydropxAPI from "../../utils/api/skydropx";
import { rateData } from "../../utils/helpers/types";

type Props = {
  indexCard: number;
  rateData: rateData;
};

export default function ShippingRateCard({ indexCard, rateData }: Props) {
  const dispatch = useDispatch();
  const createLabelAction = async () => {
    try {
      const { data } = await skydropxAPI.createLabel({
        label_format: "pdf",
        rate_id: parseInt(rateData.id),
      });
      if (data.attributes.status === "ERROR") {
        dispatch(setErrorStatus(true));
        return false;
      }
      window.location.href = data.attributes.label_url;
    } catch (error) {
      dispatch(setErrorStatus(true));
    }
  };
  return (
    <div
      className={`card  m-4 p-2 shadow ${indexCard === 0 ? "promo-card" : ""}`}
      data-label="Mejor Opcion"
    >
      <div className="card-body">
        <div className="row text-center">
          <div className="col-md-3">
            <h5 className="card-title">Proveedor</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {rateData.attributes.provider}
            </h6>
          </div>
          <div className="col-md-3">
            <h5 className="card-title">Tiempo entrega</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {rateData.attributes.days}
            </h6>
          </div>
          <div className="col-md-3">
            <h5 className="card-title">Precio</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              $ {rateData.attributes.amount_local}{" "}
              {rateData.attributes.currency_local}
            </h6>
          </div>
          <div className="col-md-3">
            <button onClick={createLabelAction} className="btn btn-primary">
              Crear etiqueta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
