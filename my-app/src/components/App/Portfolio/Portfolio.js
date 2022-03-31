import React from "react";
import Swiper from "react-id-swiper";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Swiper from "react-slider-swiper";

import "./Portfolio.scss";
import slide1 from "../../../assets/mob/s/1.png";
import slide2 from "../../../assets/mob/s/6.png";

import slide3 from "../../../assets/mob/s/2.png";
import slide4 from "../../../assets/mob/s/3.png";
import slide5 from "../../../assets/mob/s/4.png";
import slide6 from "../../../assets/mob/s/5.png";
import slide7 from "../../../assets/mob/s/7.png";
import slide8 from "../../../assets/mob/s/8.png";
import slide9 from "../../../assets/mob/s/91.png";
import slide10 from "../../../assets/mob/s/11.png";
import slide11 from "../../../assets/mob/s/10.png";
import slide12 from "../../../assets/mob/s/12.png";

import ScrollableAnchor from "react-scrollable-anchor";
import MobileSwiper from "./Swiper";

import "swiper/swiper.scss";
const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1230, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 1024, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const params1 = {
    pagination: ".swiper-pagination",
    paginationCustomizedClass: "customized-swiper-pagination", // Add your class name for pagination container
    paginationClickable: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    nextButtonCustomizedClass: "nextButtonCustomizedClass", // Add your class name for next button
    prevButtonCustomizedClass: "customized-swiper-button-prev", // Add your class name for prev button
    containerClass: "customized-swiper-container", // Replace swiper-container with customized-swiper-container
    spaceBetween: 30,
  };

  return (
    <div className="Portfolio">
      <ScrollableAnchor id={"Portfolio"}>
        <div className="PortfolioContainer DesctopPort">
          <h2>Наше портфолио </h2>
          <div>
            <Carousel
              swipeable={false}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              arrows={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {/* <Swiper {...params1}> */}
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
              <div className="slide slide5">
                <img src={slide7} alt="slide1" />
              </div>
              <div className="slide slide5">
                <img src={slide8} alt="slide1" />
              </div>
              <div className="slide slide5">
                <img src={slide9} alt="slide1" />
              </div>
              <div className="slide slide5">
                <img src={slide10} alt="slide1" />
              </div>
              <div className="slide slide5">
                <img src={slide11} alt="slide1" />
              </div>
              <div className="slide slide5">
                <img src={slide12} alt="slide1" />
              </div>
            </Carousel>
            {/* </Swiper> */}
          </div>
        </div>
      </ScrollableAnchor>
      <MobileSwiper />
    </div>
  );
};

export default Portfolio;
