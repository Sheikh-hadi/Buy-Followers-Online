import React from 'react'
import Accordian from '../CommonComponent/Accordian/Accordian';

import { accordianModelLeft, accordianModelRight } from '../Model/AccordianModel/aboutAccordianModel'
import AboutUsIntro from '../Compoents/AboutUsIntro/AboutUsIntro';
import Cards from '../Compoents/Cards/Cards';
import Block from '../Compoents/Block/Block';
import CenteredTextSection from '../Compoents/InfoSection/centeredTextSection';
import Aboutfaq from '../Compoents/Aboutfaq/Aboutfaq';

const AboutUs = () => {
  console.log("accordianModelLeft: ", accordianModelLeft, "accordianModelRight: ", accordianModelRight)
  return (
    <>
    <AboutUsIntro/>
    <Cards/>
    <Block/>
    <CenteredTextSection/>
    <Aboutfaq/>
      <Accordian accordian={{accordianModelLeft, accordianModelRight}} />
    </>
  )
}

export default AboutUs;
