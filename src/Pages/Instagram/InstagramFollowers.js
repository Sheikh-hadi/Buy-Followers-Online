import React from 'react';
import Pricing from '../../CommonComponent/Pricing/Pricing';
import Packages from '../../CommonComponent/Package/Packages';
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock';
import Accordian from '../../CommonComponent/Accordian/Accordian';

import instagramFollowersPricingModel from '../../Model/PricingModel/Instagram/instagramFollowersPricingModel';
import instagramFollowersPackagescard from '../../Model/PackagesCardsModel/InstagramFollowersPackagesCards';
import instagramFollowersImageContentBlock from '../../Model/ImageContentBlockModel/instagramFollowersImageContentBlock';
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/instagramFollowersAccordianModel';
import Card from '../../CommonComponent/Card/Card';
import instagramFollowersCardModel from '../../Model/Card/instagramFollowersCardModel';

const InstagramFollowers = () => {

    return (
        <>

            <Pricing price={instagramFollowersPricingModel} />
            <Packages cards={instagramFollowersPackagescard} />
            <ImageContentBlock block={instagramFollowersImageContentBlock} />
            <Card card={instagramFollowersCardModel}/>
            <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
        </>
    )
}

export default InstagramFollowers;