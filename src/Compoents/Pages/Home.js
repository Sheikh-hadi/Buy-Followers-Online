import React from "react";
import Header from "../Home/Header/Header";
import HomeIntro from "../Home/HomeIntro/HomeIntro";
import SelService from "../Home/SelectService/SelService";
import IconCards from "../Home/IconCard/IconCards";
import Process from "../Home/Process/Process";
import Packages from "../Home/Package/Packages";
import CardFollwers from "../Home/CardFollwer/CardFollwers";
import KeyFeatures from "../Home/KeyFeature/KeyFeatures";
import Features from "../Home/Feature/Features";
import Footer from "../Home/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <HomeIntro />
      <SelService/>
      <CardFollwers/>
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
