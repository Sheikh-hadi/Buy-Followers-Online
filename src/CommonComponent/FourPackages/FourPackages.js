import React from "react";

const FourPackages = (props) => {
  let cardList = props.card;
  // console.log("cardList: ", cardList);

  return (
    <div className="container">
      <div className="row" style={{ padding: "0px" }}>
        {cardList.map((list, index) => {
          return (
            <div
              style={{ padding: "0px" }}
              className="col-lg-3 col-sm-6 "
              key={index}
            >
              <div className="card package-card " style={list.style.background}>
                <div className="d-flex justify-content-between align-items-center">
                  <i className={list.icon} style={list.style.icon}></i>
                  <h1 className="number" style={list.style.heading1}>
                    <b>{list.id}</b>
                  </h1>
                </div>
                <h2 style={list.style.heading2}>{list.title}</h2>
                <p style={list.style.description}>{list.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourPackages;
