import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';

import buyInstagramAutoReelsPricingModel from '../../Model/PricingModel/Instagram/buyInstargamAutoReelsPricingModel';
import buyInstagramAutoReelsCardModel from '../../Model/Card/buyInstagramAutoReelsCardModel';
import FourPackages from '../../CommonComponent/FourPackages/FourPackages';
const BuyInstagramAutoReels = () => {
    return (
        <>
            <Pricing price={buyInstagramAutoReelsPricingModel} />
            <FourPackages card={buyInstagramAutoReelsCardModel} />
        </>
    )
}

export default BuyInstagramAutoReels