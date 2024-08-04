import React from 'react';
import Packages from '../../CommonComponent/Package/Packages';
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock';
import Accordian from '../../CommonComponent/Accordian/Accordian';

import instagramFollowersPackagescard from '../../Model/PackagesCardsModel/InstagramFollowersPackagesCards';
import instagramFollowersImageContentBlock from '../../Model/ImageContentBlockModel/instagramFollowersImageContentBlock';
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/instagramFollowersAccordianModel';

const InstagramFollowers = () => {

    return (
        <>
            <Packages cards={instagramFollowersPackagescard} />
            <ImageContentBlock block={instagramFollowersImageContentBlock} />
            <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
        </>
    )
}

export default InstagramFollowers