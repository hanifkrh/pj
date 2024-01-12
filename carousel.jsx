import React from 'react';
import Slider from 'react-slick';
import Profile from './profile.jsx';
import None from './none.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style-components/indicator.style.jsx'; // for indicator

function Carousel( ) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className='slcik-slider'>
          <Slider {...settings}>
            <div>
              <Profile/>
            </div>
            <div>
              <None/>
            </div>
          </Slider>
        </div>
    );
}

export default Carousel;