import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';
import Packages from '../../CommonComponent/Package/Packages';
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock';
import Accordian from '../../CommonComponent/Accordian/Accordian';

import instagramFollowersPricingModel from '../../Model/PricingModel/Instagram/instagramFollowersPricingModel';
import instagramFollowersPackagescard from '../../Model/PackagesCardsModel/InstagramFollowersPackagesCards';
import instagramFollowersImageContentBlock from '../../Model/ImageContentBlockModel/instagramFollowersImageContentBlock';
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/instagramFollowersAccordianModel';
import instagramFollowersCardModel from '../../Model/Card/instagramFollowersCardModel';
import FAQ from '../../Compoents/FAQ/FAQ';
import FourPackages from '../../CommonComponent/FourPackages/FourPackages';

const InstagramFollowers = () => {

    return (
        <>

            <Pricing price={instagramFollowersPricingModel} />
            <Packages cards={instagramFollowersPackagescard} />
            <ImageContentBlock block={instagramFollowersImageContentBlock} />
            <FourPackages card={instagramFollowersCardModel}/>
          <FAQ/>
            <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
        </>
    )
}

export default InstagramFollowers;