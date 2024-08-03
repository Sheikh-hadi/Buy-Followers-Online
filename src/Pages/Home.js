import React from "react";
import Header from "../Compoents/Home/Header/Header";
import HomeIntro from "../Compoents/Home/HomeIntro/HomeIntro";
import SelService from "../Compoents/Home/SelectService/SelService";
import IconCards from "../Compoents/Home/IconCard/IconCards";
import Process from "../Compoents/Home/Process/Process";
import Packages from "../Compoents/Home/Package/Packages";
import KeyFeatures from "../Compoents/Home/KeyFeature/KeyFeatures";
import Features from "../Compoents/Home/Feature/Features";
import Footer from "../Compoents/Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeIntro />
      <SelService/>
      <IconCards/>
      <Process/>
      <Packages/>
      <KeyFeatures/>
      <Features/>
     <Footer/>
     
  
    </div>
  );
};

export default Home;
