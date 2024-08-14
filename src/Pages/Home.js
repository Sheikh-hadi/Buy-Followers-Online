import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeIntro from "../Compoents/HomeComponent/HomeIntro/HomeIntro";
import SelService from "../Compoents/HomeComponent/SelectService/SelService";
import IconCards from "../Compoents/HomeComponent/IconCard/IconCards";
import Process from "../Compoents/HomeComponent/Process/Process";
import Packages from "../CommonComponent/Package/Packages";
import KeyFeatures from "../Compoents/HomeComponent/KeyFeature/KeyFeatures";
import Features from "../Compoents/HomeComponent/Feature/Features";
import { Skeleton } from "antd";

const Home = () => {
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/");
        setHome(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // console.log("home in home page: ", home);

  if (loading) {
    return <Skeleton/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {Object.keys(home).length ? (
        <div>
          <HomeIntro intro={home.intro} />
          <SelService />
          <IconCards iconCardArray={home.iconCardArray} />
          <Process threeStepProcess={home.threeStepProcess} />
          <Packages cards={home.homePackagescards} />
          <KeyFeatures />
          <Features />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Home;
