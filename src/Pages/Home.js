import React from "react";
import Header from "../Compoents/Header/Header";
import HomeIntro from "../Compoents/HomeComponent/HomeIntro/HomeIntro";
import SelService from "../Compoents/HomeComponent/SelectService/SelService";
import IconCards from "../Compoents/HomeComponent/IconCard/IconCards";
import Process from "../Compoents/HomeComponent/Process/Process";
import Packages from "../Compoents/HomeComponent/Package/Packages";
import KeyFeatures from "../Compoents/HomeComponent/KeyFeature/KeyFeatures";
import Features from "../Compoents/HomeComponent/Feature/Features";
import Footer from "../Compoents/Footer/Footer";
import homePackagescards from "../Model/homePackagesCards";
const Home = ( ) => {
 
  return (
    <div>
      <Header />
      <HomeIntro />
      <SelService />
      <IconCards />
      <Process />
      <Packages cards= {homePackagescards} />
      <KeyFeatures />
      <Features />
      <Footer />


    </div>
  );
};

export default Home;
