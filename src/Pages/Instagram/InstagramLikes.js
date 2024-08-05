import React from 'react';
import Packages from '../../CommonComponent/Package/Packages';
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock';
import Accordian from '../../CommonComponent/Accordian/Accordian';

import instagramLikesPackagesCards from '../../Model/PackagesCardsModel/instagramLikesPackagescards';
import instagramLikesImageContentBlock from '../../Model/ImageContentBlockModel/instagramLikesImageContentBlock';
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/instagramLikesAccordianModel';
const InstagramLikes = () => {
    return (
        <>
            <Packages cards={instagramLikesPackagesCards} />
            <ImageContentBlock block={instagramLikesImageContentBlock} />
            <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
        </>
    )
}

export default InstagramLikes