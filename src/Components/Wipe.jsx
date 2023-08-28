import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Wipe.css'; 

const Wipe = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="grid">
            <div className="grid-1"></div>
            <div className="grid-2"></div>
            <div className="grid-3"></div>
            <div className="grid-4"></div>
            <div className="grid-5"></div>
            <div className="grid-6"></div>
        </div>
        {/* Add more slides */}
      </Slider>
    </div>
  );
};

export default Wipe;
