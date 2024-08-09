import React from 'react';

const Packages = (props) => {
  let cardList = props.cards;
  console.log("cardList: ", cardList);
  return (
    <div className="container mt-4">
      <div className="row no-gutters">
        {cardList.map((list, index) => {
          return (
            <div className="col" key={index}>
              <div className="card package-card p-0" style={list.style.background}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <i className={list.icon} style={list.style.icon}></i>
                    <h1 className="number" style={list.style.heading1}><b>{list.id}</b></h1>
                  </div>
                  <h2 style={list.style.heading2}>{list.title}</h2>
                  <p style={list.style.description}>
                    {list.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Packages;
