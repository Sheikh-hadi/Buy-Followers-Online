import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';
import Card from '../../CommonComponent/Card/Card';

import buyInstagramAutoReelsPricingModel from '../../Model/PricingModel/Instagram/buyInstargamAutoReelsPricingModel';
import buyInstagramAutoReelsCardModel from '../../Model/Card/buyInstagramAutoReelsCardModel';
const BuyInstagramAutoReels = () => {
    return (
        <>
            <Pricing price={buyInstagramAutoReelsPricingModel} />
            <Card card={buyInstagramAutoReelsCardModel} />
        </>
    )
}

export default BuyInstagramAutoReels