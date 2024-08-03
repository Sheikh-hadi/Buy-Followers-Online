import React from 'react'
import'./SelService.css'
const SelService = () => {
  return (
    <div>
    <div  className="row selectservice-main">
      <div className="col-sm-12 col-lg-12">
         <h1>Select Services</h1>
          <p>Select Your Required Service & Enjoy</p>
      </div>
      <div className="button-services">
            <button className="btn-ig">
              <i className="fab fa-instagram"></i>&nbsp;&nbsp;Instagram
            </button>
            <button className="btn-tk">
              <i className="fab fa-tiktok"></i>&nbsp;&nbsp;Tiktok
            </button>
          </div>
    </div>
  </div>
  )
}

export default SelService

