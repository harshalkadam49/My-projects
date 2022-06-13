import React from "react";
import "./style.css";
import PricingCard from "./pricingCardComponent.js";

function Pricing() {
  return (
    <div className="">
      <div className="col-12">
        <h1 className="m-5">Our Pricing</h1>
      </div>
      <PricingCard />
    </div>
  );
}

export default Pricing;
