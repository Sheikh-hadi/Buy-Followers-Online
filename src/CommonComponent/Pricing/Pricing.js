import React, { useState } from "react";
import "./Pricing.css";
import { useNavigate } from "react-router-dom";

const Pricing = ({ price, handleProduct }) => {
  const navigate = useNavigate();
  const [selectedBox, setSelectedBox] = useState(null);
  // console.log("selectedBox: ", selectedBox);
  console.log("price: ", price);
  const selectBox = (box) => {
    if (selectedBox === box) {
      setSelectedBox(null);
    } else {
      setSelectedBox(box);
    }
  };

  const buyNow = () => {
    handleProduct(selectedBox);
    if (!selectedBox) {
      alert("Please select an option first.");
    }
    navigate("/checkout");
  };

  return (
    <div className="container" style={{ marginTop: "-60px" }}>
      <div className="row">
        <div className="col-lg-6">
          <h1 className="Heading">{price?.title}</h1>
          <p className="para1">{price?.description}</p>
          <div className="btn-1">
            <button className="butn" onClick={buyNow}>
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-box">
            {price.boxes.map((box, index) => (
              <div
                key={index}
                className={`inner-box ${selectedBox === box ? "selected" : ""}`}
                onClick={() => selectBox(box)}
              >
              
                <h6 className="box-num">{box?.number }</h6>
                <p className="box-para">{box?.title}</p>
              </div>
            ))}
            <div className="output-container">
              <h5>{selectedBox ? `Price: $${selectedBox.price}` : ""}</h5>
            </div>
            <button className="main-button" onClick={buyNow}>
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
