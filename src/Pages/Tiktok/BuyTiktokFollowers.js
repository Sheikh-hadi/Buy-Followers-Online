import React from 'react'
import ImageContentBlock from '../../CommonComponent/ImageContentBlock/ImageContentBlock'
import Accordian from '../../CommonComponent/Accordian/Accordian'

import buytiktokfollowersImageContentBlock from '../../Model/ImageContentBlockModel/buyTiktokFollowersImageContentBlock'
import buytiktokfollowersImageContentBlock2 from '../../Model/ImageContentBlockModel/buytiktokfollowersImageContentBlock2'
import { accordianModelLeft, accordianModelRight } from '../../Model/AccordianModel/buyTiktokFollowersAccordianModel'
const BuyTiktokFollowers = () => {
  return (
    <>
      <ImageContentBlock block={buytiktokfollowersImageContentBlock} />
      <ImageContentBlock block={buytiktokfollowersImageContentBlock2} />
      <Accordian accordian={{ accordianModelLeft, accordianModelRight }} />
    </>
  )
}

export default BuyTiktokFollowers