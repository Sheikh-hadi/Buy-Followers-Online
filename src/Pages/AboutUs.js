import React, { useEffect, useState } from "react";
import { fetchData } from "../Hooks/useGetHandleHook";
import Accordian from '../CommonComponent/Accordian/Accordian';
import AboutUsIntro from '../Compoents/AboutUsIntro/AboutUsIntro';
import Cards from '../Compoents/Cards/Cards';
import Block from '../Compoents/Block/Block';
import CenteredTextSection from '../Compoents/InfoSection/centeredTextSection';
import Aboutfaq from '../Compoents/Aboutfaq/Aboutfaq';
import { Skeleton } from "antd";

const AboutUs = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("About page", about);

  useEffect(() => {
    fetchData(
      setLoading,
      setError,
      setAbout,
      "http://localhost:8000/api/about"
    );
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      {about && Object.keys(about).length ? (
        <div>
          <AboutUsIntro intro={about?.intro} />
          <Cards aboutHomeCards={about?.aboutHomeCards} />
          <Block aboutBlock={about?.aboutBlock} />
          <CenteredTextSection textCentered={about?.textCentered} />
          <Aboutfaq />
          <Accordian 
            accordian={{
              left: about?.accordianModelLeft, 
              right: about?.accordianModelRight
            }} 
          />
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default AboutUs;
