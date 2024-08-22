import React from 'react';
import './FAQ.css';

const FAQ = ({faq}) => {
    return (
        <div className="container faq-container">
            <div className="row justify-content-center text-center">
                <div className="col-12 order-1">
                    <button className="btn btn-danger faq-btn">{faq?.button}</button>
                </div>
                <div className="col-12 mt-3 order-2">
                    <h1 className="faq-title">{faq?.text}</h1>
                </div>
                <div className="col-12 mt-2 order-3">
                    <p className="faq-subtitle">
                       {faq?.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;