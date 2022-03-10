import React from "react";
import { useSelector } from "react-redux";
import ShippingRateCard from "./ShippingRate.card";

export default function ShippingCompaniesContainer() {
  const ratesList = useSelector(
    ({ shipping }: { shipping: any }) => shipping.rates,
  );
  return (
    <div className="m-3">
      {ratesList.map((rate: any, index: number) => {
        return (
          <ShippingRateCard key={rate.id} indexCard={index} rateData={rate} />
        );
      })}
    </div>
  );
}
