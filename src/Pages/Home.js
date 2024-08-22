import React, { useEffect, useState } from "react";
import { fetchData } from "../Hooks/useGetHandleHook";
import HomeIntro from "../Compoents/HomeComponent/HomeIntro/HomeIntro";
import SelService from "../Compoents/HomeComponent/SelectService/SelService";
import IconCards from "../Compoents/HomeComponent/IconCard/IconCards";
import Process from "../Compoents/HomeComponent/Process/Process";
import Packages from "../CommonComponent/Package/Packages";
import KeyFeatures from "../Compoents/HomeComponent/KeyFeature/KeyFeatures";
import Features from "../Compoents/HomeComponent/Feature/Features";
import { Skeleton } from "antd";

const Home = () => {
  const user = false;
  const [home, setHome] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("home page", home);
  useEffect(() => {
    fetchData(setLoading, setError, setHome, "http://localhost:8000/api/home");
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {home && Object.keys(home).length ? (
        <div>
          <HomeIntro intro={{ intro: home?.intro, user }} />
          <SelService />
          <IconCards iconCardArray={home?.iconCardArray} />
          <Process
            threeStepProcess={{
              threeStepProcess: home?.threeStepProcess,
              user,
            }}
          />
          <Packages cards={home?.homePackagescards} />
          <KeyFeatures />
          <Features features={home?.features} />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default Home;
