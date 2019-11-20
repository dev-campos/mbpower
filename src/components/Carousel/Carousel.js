import React from 'react';
import Slider from "react-slick";
import style from "./Carousel.module.css"

import img1 from "../../assets/01.jpg"
import img2 from "../../assets/02.jpg"

const Carousel = (props) => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <Slider className={style.Carousel} {...settings}>
      <div>
        <img src={img1} alt=""/>
      </div>
      <div>
        <img src={img2} alt=""/>
      </div>
    </Slider>
  )
};

export default Carousel;