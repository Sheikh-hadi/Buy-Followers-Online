import React from 'react'

const Card = (props) => {
    let value = props.card;
    console.log("value: ", value);
    return (
        <div className='container' >
            <div className='row g3' >
{
    value.map((card,index)=>{
        return(
           
                <div className="col-lg-3 col-md-6 " >
                    <div className="card package-card" style={card.style.background}>
                        <div className="card-body">
                            <div >
                                <i className={card.icon} style={card.style.icon}></i>
                            </div>
                            <h2 style={card.style.heading2} >{card.title}</h2>
                            <p style={card.style.description}>
                                {card.description}
                            </p>
                        </div>
                    </div>
                </div>
        )
    })
}

            </div>

        </div>
    )
}

export default Card