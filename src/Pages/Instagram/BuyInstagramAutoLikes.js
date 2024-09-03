import React, { useState, useEffect } from "react";
import { fetchData } from "../../Hooks/useGetHandleHook";
import Pricing from "../../CommonComponent/Pricing/Pricing";

import { Skeleton } from "antd";
const BuyInstagramAutoLikes = ({ handleProduct }) => {
  // const user = true;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("Data in Instagram Auto likes page", data);
  useEffect(() => {
    fetchData(
      setLoading,
      setError,
      setData,
      "http://localhost:8000/api/instagram/auto/likes"
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
        </>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
};

export default BuyInstagramAutoLikes;
