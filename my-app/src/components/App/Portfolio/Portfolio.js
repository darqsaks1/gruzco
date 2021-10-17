import React, { useEffect } from "react";
import Swiper from "react-id-swiper";
import "./Portfolio.scss";
// import "swiper/swiper.scss";
import slide1 from "../../../assets/s1.png";
import slide2 from "../../../assets/s2.png";

import slide3 from "../../../assets/s3.png";
import slide4 from "../../../assets/s4.png";
import slide5 from "../../../assets/s5.png";
import slide6 from "../../../assets/s6.png";
import ScrollableAnchor from "react-scrollable-anchor";
import MobileSwiper from "./Swiper";
// import {
//   Page,
//   Navbar,
//   BlockTitle,
//   Swiper1 as Swiper3,
//   SwiperSlide,
//   Block,
// } from "framework7-react";
// import "./swiper.scss";
import "swiper/swiper.scss";
const Portfolio = () => {
  const params1 = {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
  const params = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <div className="Portfolio">
      <ScrollableAnchor id={"Portfolio"}>
        <div class="PortfolioContainer DesctopPort">
          <h2>Наше портфолио </h2>
          <div>
            <Swiper {...params1}>
              <div className="slide slide1">
                <img src={slide1} alt="slide1 " />
              </div>

              <div className="slide slide2">
                <img src={slide2} alt="slide1 " />
              </div>

              <div className="slide slide3">
                <img src={slide3} alt="slide1 " />
              </div>

              <div className="slide slide4">
                <img src={slide4} alt="slide1" />
              </div>

              <div className="slide slide5">
                <img src={slide5} alt="slide1" />
              </div>

              <div className="slide slide5">
                <img src={slide6} alt="slide1" />
              </div>
            </Swiper>
          </div>
        </div>
      </ScrollableAnchor>
      <MobileSwiper />
    </div>
  );
};

export default Portfolio;
