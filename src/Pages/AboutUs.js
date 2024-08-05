import React from 'react'
import Accordian from '../CommonComponent/Accordian/Accordian';

import { accordianModelLeft, accordianModelRight } from '../Model/AccordianModel/aboutAccordianModel'

const AboutUs = () => {
  console.log("accordianModelLeft: ", accordianModelLeft, "accordianModelRight: ", accordianModelRight)
  return (
    <>
      <Accordian accordian={{accordianModelLeft, accordianModelRight}} />
    </>
  )
}

export default AboutUs;
