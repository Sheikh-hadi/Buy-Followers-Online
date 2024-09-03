import React from "react";
import Pricing from "../../CommonComponent/Pricing/Pricing";
import buyTiktokViewPricingModel from "../../Model/PricingModel/Tiktok/buyTiktokViewsPricingModel";

const BuyTiktokViews = ({ handleProduct }) => {
  return (
    <Pricing price={buyTiktokViewPricingModel} handleProduct={handleProduct} />
  );
};

export default BuyTiktokViews;
