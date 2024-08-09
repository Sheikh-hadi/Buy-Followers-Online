import React from 'react';
const FourPackages = (props) => {
    let cardList = props.card;
    console.log("cardList: ", cardList);
    return (
            <div className="row" style={{paddingLeft:"20px", paddingRight:"20px"}}>
                {cardList.map((list, index) => {
                    return (
                        <div className="col-lg-3 col-md-6 "  >
                            <div className="card package-card " style={list.style.background} >
                                    <div className="d-flex justify-content-between align-items-center ">
                                        <i className={list.icon} style={list.style.icon}></i>
                                        <h1 className="number" style={list.style.heading1}><b>{list.id}</b></h1>
                                    </div>
                                    <h2 style={list.style.heading2} >{list.title}</h2>
                                    <p style={list.style.description}>
                                        {list.description}
                                    </p>
                                </div>
                            </div>
                    )
                })}
            </div>
    );
}

export default FourPackages;
