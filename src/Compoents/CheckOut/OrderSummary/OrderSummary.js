import React from 'react';
import './OrderSummary.css';

const OrderSummary = () => {
    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h4 className="mb-4">Your order</h4>
                <div className="row mb-2">
                    <div className="col-8">
                        <img 
                            src="https://via.placeholder.com/50" 
                            alt="Product" 
                            className="me-2" 
                        />
                        <span className="align-middle">
                            Get Instant Fame with Buy Instagram Followers in Australia – 2500
                        </span>
                    </div>
                    <div className="col-4 text-end">
                        <span>$24.99</span>
                    </div>
                </div>
                <hr />
                <div className="row mb-2">
                    <div className="col-8">
                        <strong>Subtotal</strong>
                    </div>
                    <div className="col-4 text-end">
                        <strong>$24.99</strong>
                    </div>
                </div>
                <hr />
                <div className="row mb-4">
                    <div className="col-8">
                        <strong>Total</strong>
                    </div>
                    <div className="col-4 text-end">
                        <strong>$24.99</strong>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Coupon Code" 
                        />
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger w-100">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderSummary;
