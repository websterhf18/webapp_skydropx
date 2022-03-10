import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ShippingForm, { ShippingFormValues } from "../Forms/Shipping.form";
import ShippingCompaniesContainer from "./ShippingCompanies.container";
import ShippingListContainer from "./ShippingList.container";

import skydropxAPI from "../../utils/api/skydropx";
import { cleanResponseRates, combineFormWithBase } from "../../utils/helpers";
import { setRates } from "../../models/shippingSlice";

export default function ShippingTabsContainer() {
  const dispatch = useDispatch();
  const tabStatus = useSelector(
    ({ shipping }: { shipping: any }) => shipping.tabStatus,
  );
  const onSubmitShipping = async (values: ShippingFormValues) => {
    const newData = combineFormWithBase(values);
    const data = await skydropxAPI.createShipments(newData);
    const rates = cleanResponseRates(data);
    dispatch(setRates(rates));
  };
  return (
    <>
      <div className={`row ${tabStatus === "form" ? "d-block" : "d-none"}`}>
        <div className="col-md-10 m-auto">
          <ShippingForm onSubmit={onSubmitShipping} />
        </div>
      </div>
      <div className={`row ${tabStatus === "form" ? "d-block" : "d-none"}`}>
        <div className="col-md-10 m-auto">
          <ShippingCompaniesContainer />
        </div>
      </div>
      <div className={`row ${tabStatus === "list" ? "d-block" : "d-none"}`}>
        <div className="col-md-10 m-auto">
          <ShippingListContainer />
        </div>
      </div>
    </>
  );
}
