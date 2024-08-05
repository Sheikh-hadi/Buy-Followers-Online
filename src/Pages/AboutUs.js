import React from 'react'
import Accordian from '../CommonComponent/Accordian/Accordian';

import { accordianModelLeft, accordianModelRight } from '../Model/AccordianModel/aboutAccordianModel'
import AboutUsIntro from '../Compoents/AboutUsIntro/AboutUsIntro';
import Cards from '../Compoents/Cards/Cards';

const AboutUs = () => {
  console.log("accordianModelLeft: ", accordianModelLeft, "accordianModelRight: ", accordianModelRight)
  return (
    <>
    <AboutUsIntro/>
    <Cards/>
      <Accordian accordian={{accordianModelLeft, accordianModelRight}} />
    </>
  )
}

export default AboutUs;
