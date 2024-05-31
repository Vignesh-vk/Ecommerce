import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../Mainbanner/slickmainbanner.css"
import "../Mainbanner/Mainbanner.css"
import Fashionbanner1 from "../../Assets/Fashionbanner1.jpg"
import Fashionbanner2 from "../../Assets/Fashionbanner2.jpg"
import Fashionbanner3 from "../../Assets/Fashionbanner3.jpg"
import Stickybanner1 from "../../Assets/Mainbanner3.jpg"
import Stickybanner2 from "../../Assets/Mainbanner4.jpg"




const Mainbanners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        
      };
  return (
    <div className="Mainbanner">
   <div className="mainbannerone">
    <div className="slider-container">
      <Slider {...settings}>
        <div className="banner1">
            <img src={Fashionbanner1} alt="" />
        </div>
        <div className="banner1">
            <img src={Fashionbanner2} alt="" />
        </div>
        <div className="banner1">
            <img src={Fashionbanner3} alt="" />
        </div>
      </Slider>
    </div>
    </div>
    <div className="Mainbanner2">
        <div className="sticky-banner">
            <img src={Stickybanner1} alt="" />
        </div>
        <div className="Mainbanner3">
        <div className="sticky-banner2">
            <img src={Stickybanner2} className="sitcky-banners" alt="" />
        </div>
    </div>

    </div>
    
    </div>

   
  )
}

export default Mainbanners