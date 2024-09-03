import React, { useState, useEffect } from "react";
import { fetchData } from "../../Hooks/useGetHandleHook";
import Pricing from "../../CommonComponent/Pricing/Pricing";
import Packages from "../../CommonComponent/Package/Packages";
import ImageContentBlock from "../../CommonComponent/ImageContentBlock/ImageContentBlock";
import Accordian from "../../CommonComponent/Accordian/Accordian";

import FAQ from "../../CommonComponent/FAQ/FAQ";
import FourPackages from "../../CommonComponent/FourPackages/FourPackages";
import InstagramFollowersText from "../../Compoents/InstaFollowerReaminngComp/Comp1/Comp1";
import PickUp from "../../Compoents/InstaFollowerReaminngComp/PickUp/PickUp";
import UpdatedBenefits from "../../Compoents/InstaFollowerReaminngComp/UpdatedBenefits/UpdatedBenefits";
import { Skeleton } from "antd";

const InstagramFollowers = ({ handleProduct }) => {
  // const user = true;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("Data in Instagram Folowers page", data);
  useEffect(() => {
    fetchData(
      setLoading,
      setError,
      setData,
      "http://localhost:8000/api/instagram/follower"
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
          <InstagramFollowersText text={data?.firstText} />
          <Packages cards={data?.threeCard} />
          <ImageContentBlock block={data?.imageContentBlockFirst} />
          <PickUp text={data?.secondText} />
          <ImageContentBlock block={data?.imageContentBlockSecond} />
          <UpdatedBenefits />
          <FourPackages card={data?.fourCard} />
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

export default InstagramFollowers;
