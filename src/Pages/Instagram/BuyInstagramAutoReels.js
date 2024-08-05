import React from 'react';
import Packages from '../../CommonComponent/Package/Packages';
import buyinstagramautoreels from "../../Model/PackagesCardsModel/buyInstagramAutoReelsPackagesCards";
import Pricing from '../../CommonComponent/Pricing/Pricing';
import buyInstagramAutoReelsPricingModel from '../../Model/PricingModel/Instagram/buyInstargamAutoReelsPricingModel';
const BuyInstagramAutoReels = () => {
    return (
        <>
            <Pricing price={buyInstagramAutoReelsPricingModel} />
            <Packages cards={buyinstagramautoreels} />
        </>
    )
}

export default BuyInstagramAutoReels