import React from "react";
import ShippingForm from "./Shipping.form";
import ShippingCompaniesContainer from "./ShippingCompanies.container";
import ShippingListContainer from "./ShippingList.container";

export default function ShippingTabsContainer() {
  return (
    <>
      <div className="row">
        <div className="col-md-10 m-auto">
          <ShippingForm />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 m-auto">
          <ShippingCompaniesContainer />
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 m-auto">
          <ShippingListContainer />
        </div>
      </div>
    </>
  );
}
