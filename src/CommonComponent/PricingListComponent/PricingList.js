import React, { useState } from "react";
import "./PricingList.css";

const PricingList = (props) => {
  const [selectedBox, setSelectedBox] = useState(null);
  let value = props.price;
  console.log("value: ", value);

  const selectBox = (box) => {
    if (selectedBox === box) {
      setSelectedBox(null);
    } else {
      setSelectedBox(box);
    }
  };

  const buyNow = () => {
    if (selectedBox) {
      window.location.href = selectedBox.link;
    } else {
      alert("Please select an option first.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="Heading">{value.title}</h1>
          <ul>
    {value.list.map((li, index) => {
        return (
            <li key={index}>{li}</li> // Added a key prop for unique identification
        );
    })}
</ul>

          <div className="btn-1">
            <button className="butn" onClick={buyNow}>
              READ MORE
            </button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-box">
            {value.boxes.map((box, index) => (
              <div
                key={index}
                className={`inner-box ${selectedBox === box ? "selected" : ""}`}
                onClick={() => selectBox(box)}
              >
                <h6 className="box-num">{box.Number}</h6>
                <p className="box-para">{box.title}</p>
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

export default PricingList;
