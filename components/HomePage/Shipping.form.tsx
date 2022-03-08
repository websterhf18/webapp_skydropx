import React from "react";

export default function ShippingForm() {
  return (
    <form className="needs-validation m-3">
      <div className="row g-3">
        <div className="col-sm-6">
          <label htmlFor="firstName" className="form-label">
            Codigo postal origen
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-6">
          <label htmlFor="lastName" className="form-label">
            Codigo postal destino
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>

        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Weight
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Height
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Width
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
        <div className="col-md-3">
          <label htmlFor="lastName" className="form-label">
            Length
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder=""
            value=""
          />
          <div className="invalid-feedback">Valid last name is required.</div>
        </div>
      </div>
      <hr className="my-4" />
      <button className="w-100 btn btn-primary btn-lg" type="submit">
        Enviar
      </button>
    </form>
  );
}
