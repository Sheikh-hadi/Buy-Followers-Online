import React from 'react'
import Pricing from '../../CommonComponent/Pricing/Pricing'
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock'
import Accordian from '../../CommonComponent/Accordian/Accordian'

import buytiktokfollowersImageContentBlock from '../../Model/ImageContentBlockModel/buyTiktokFollowersImageContentBlock'
import buytiktokfollowersImageContentBlock2 from '../../Model/ImageContentBlockModel/buytiktokfollowersImageContentBlock2'
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/buyTiktokFollowersAccordianModel'
import buyTiktokFollowersPricingModel from '../../Model/PricingModel/Tiktok/buyTiktokFollowersPricingModel'
import Card from '../../CommonComponent/Card/Card'
import buyTiktokFollowersCardModel from '../../Model/Card/Tiktok/buyTiktokFollowersCardModel'
const BuyTiktokFollowers = () => {
  return (
    <>
      <Pricing price={buyTiktokFollowersPricingModel} />
      <ImageContentBlock block={buytiktokfollowersImageContentBlock} />
      <Card card={buyTiktokFollowersCardModel} />
      <ImageContentBlock block={buytiktokfollowersImageContentBlock2} />
      <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
    </>
  )
}

export default BuyTiktokFollowers