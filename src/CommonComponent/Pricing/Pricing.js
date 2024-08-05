import React, { useState } from 'react';
import './Pricing.css';

const Pricing = (props) => {
    const [selectedBox, setSelectedBox] = useState(null);
    let value = props.price;
    console.log("value: ", value)

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
            alert('Please select an option first.');
        }
    };

    return (
        <div className='container'>
        
            <div className='row'>
                <div className='col-lg-6'>
                    <h1> {value.title}  </h1>
                    <p>{value.description}</p>
                </div>
                <div className='col-lg-6'>
                    <div className='main-box'>
                        {value.boxes.map((box, index) => (
                            <div
                                key={index}
                                className={`inner-box ${selectedBox === box ? 'selected' : ''}`}
                                onClick={() => selectBox(box)}
                            >
                                <h6>{box.Number}</h6>
                                <p> {box.title} </p>
                            </div>
                        ))}
                        <div className='output-container'>
                            <h5>{selectedBox ? `Price: $${selectedBox.price}` : ''}</h5>
                        </div>
                        <button className='main-button' onClick={buyNow}>Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
