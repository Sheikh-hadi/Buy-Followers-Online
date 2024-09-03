import React, { useState, useEffect } from "react";
import { fetchData } from "../../Hooks/useGetHandleHook";
import Pricing from "../../CommonComponent/Pricing/Pricing";
import Packages from "../../CommonComponent/Package/Packages";
import ImageContentBlock from "../../CommonComponent/ImageContentBlock/ImageContentBlock";
import Accordian from "../../CommonComponent/Accordian/Accordian";
import Comp1 from "../../Compoents/InstaFollowerReaminngComp/Comp1/Comp1";
import PickUp from "../../Compoents/InstaFollowerReaminngComp/PickUp/PickUp";
import FAQ from "../../CommonComponent/FAQ/FAQ";
import { Skeleton } from "antd";
const InstagramLikes = ({ handleProduct }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log("Data in Instagram likes page", data);
  useEffect(() => {
    fetchData(
      setLoading,
      setError,
      setData,
      "http://localhost:8000/api/instagram/likes"
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
      {data && Object.keys(data).length ? (
        <>
          <Pricing price={data?.pricing} handleProduct={handleProduct} />
          <Comp1 text={data?.firstText} />
          <Packages cards={data?.threeCard} />
          <PickUp text={data.secondText} />
          <ImageContentBlock block={data?.imageContentBlockSecond} />
          <FAQ faq={data?.faq} />
          <Accordian
            accordian={{
              left: data?.accordianModelLeft,
              right: data?.accordianModelRight,
            }}
          />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};
export default InstagramLikes;
