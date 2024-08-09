import React from 'react';
import './AboutUsIntro.css';
import about from '../../assets/images/aboutus.jpg'
export default function AboutUsIntro() {
  return (
    <div className="container mt-1">
      <div className="row align-items-center intro">
        <div className="col-xs-12 col-sm-12  col-md-12  col-lg-6  intro_img">
          <img src={about} alt="" className="img-fluid rounded" />
        </div>
        <div className="col-xs-12 col-sm-12  col-md-12  col-lg-6 intro_text">
          <h3 className="blue">About Us</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste doloribus, minima ut officiis nobis esse
            repudiandae expedita laborum facere modi perspiciatis a nesciunt voluptas error fugit delectus similique
            ex labore?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta, accusantium nam quas deserunt
            molestias sequi, minima, reprehenderit ducimus magni a numquam id harum. Quod tempora labore animi dicta
            placeat.</p>
        </div>
      </div>
    </div>
  );
}
