import React from "react";
import HomeIntro from "../Compoents/HomeComponent/HomeIntro/HomeIntro";
import SelService from "../Compoents/HomeComponent/SelectService/SelService";
import IconCards from "../Compoents/HomeComponent/IconCard/IconCards";
import Process from "../Compoents/HomeComponent/Process/Process";
import Packages from "../CommonComponent/Package/Packages";
import KeyFeatures from "../Compoents/HomeComponent/KeyFeature/KeyFeatures";
import Features from "../Compoents/HomeComponent/Feature/Features";

import homePackagescard from "../Model/PackagesCardsModel/homePackagesCards";
const Home = ( ) => {
 
  return (
    <div>
      <HomeIntro />
      <SelService />
      <IconCards />
      <Process />
      <Packages cards= {homePackagescard} />
      <KeyFeatures />
      <Features />


    </div>
  );
};

export default Home;
