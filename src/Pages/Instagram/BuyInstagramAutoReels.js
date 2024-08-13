import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';

import buyInstagramAutoReelsPricingModel from '../../Model/PricingModel/Instagram/buyInstargamAutoReelsPricingModel';
import buyInstagramAutoReelsCardModel from '../../Model/Card/buyInstagramAutoReelsCardModel';
import FourPackages from '../../CommonComponent/FourPackages/FourPackages';
import PricingList from '../../CommonComponent/PricingListComponent/PricingList';
import UpdatedBenefits from './../../Compoents/InstaFollowerReaminngComp/UpdatedBenefits/UpdatedBenefits';
import ChooseServices from '../../Compoents/BuyInstagramReelsLikes/ChooseServices/ChooseServices';
const BuyInstagramAutoReels = () => {
    return (
        <>
            <PricingList price={buyInstagramAutoReelsPricingModel} />
            <UpdatedBenefits/>
           
           <ChooseServices/>
            <FourPackages card={buyInstagramAutoReelsCardModel} />
        </>
    )
}

export default BuyInstagramAutoReels