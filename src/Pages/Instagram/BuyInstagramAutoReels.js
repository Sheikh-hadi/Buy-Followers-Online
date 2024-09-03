import React, { useState, useEffect } from "react";
import { fetchData } from "../../Hooks/useGetHandleHook";

import buyInstagramAutoReelsCardModel from "../../Model/Card/buyInstagramAutoReelsCardModel";
import FourPackages from "../../CommonComponent/FourPackages/FourPackages";
import PricingList from "../../CommonComponent/PricingListComponent/PricingList";
import UpdatedBenefits from "./../../Compoents/InstaFollowerReaminngComp/UpdatedBenefits/UpdatedBenefits";
import ChooseServices from "../../Compoents/BuyInstagramReelsLikes/ChooseServices/ChooseServices";
import { Skeleton } from "antd";
const BuyInstagramAutoReels = ({ handleProduct }) => {
  // const user = true;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  //   console.log("Data in Instagram likes page", data);
  useEffect(() => {
    fetchData(
      setLoading,
      setError,
      setData,
      "http://localhost:8000/api/instagram/auto/reels"
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
          <PricingList price={data?.pricing} handleProduct={handleProduct} />
          <UpdatedBenefits />

          <ChooseServices text={data?.firstText} />
          <FourPackages card={buyInstagramAutoReelsCardModel} />
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default BuyInstagramAutoReels;
