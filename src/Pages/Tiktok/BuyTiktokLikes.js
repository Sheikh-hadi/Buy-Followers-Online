import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';

import buyTiktokLikesPricingModel from '../../Model/PricingModel/Tiktok/buyTiktokLikesPricingModel';

const BuyTiktokLikes = ({ handleProduct }) => {
  return (
    <Pricing price ={buyTiktokLikesPricingModel} handleProduct={handleProduct} />
  )
}

export default BuyTiktokLikes