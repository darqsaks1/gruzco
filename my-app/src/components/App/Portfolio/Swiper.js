import React from "react";
import slide1 from "../../../assets/mob/mob/1.png";
import ImageGallery from "react-image-gallery";
// import "~react-image-gallery/styles/scss/image-gallery.scss";
//
 
import slide2 from "../../../assets/mob/mob/2.png";
import "./Swiper.scss";

import slide3 from "../../../assets/mob/mob/3.png";
import slide4 from "../../../assets/mob/mob/4.png";
import slide5 from "../../../assets/mob/mob/5.png";
import slide6 from "../../../assets/mob/mob/6.png";
import slide7 from "../../../assets/mob/mob/7.png";
import slide8 from "../../../assets/mob/mob/8.png";
import slide9 from "../../../assets/mob/mob/9.png";
import slide10 from "../../../assets/mob/mob/10.png";
import slide11 from "../../../assets/mob/mob/11.png";
import slide12 from "../../../assets/mob/mob/12.png";

const images = [
  {
    original: slide1,
  },
  {
    original: slide2,
  },
  {
    original: slide3,
  },
  {
    original: slide4,
  },
  {
    original: slide5,
  },
  {
    original: slide6,
  },
  {
    original: slide7,
  },
  {
    original: slide8,
  },
  {
    original: slide9,
  },
  {
    original: slide10,
  },
  {
    original: slide11,
  },
  {
    original: slide12,
  },
];
const MobileSwiper = () => {
  return (
    <div className="PortfolioContainer1 ">
      <h2>Наше портфолио </h2>

      <ImageGallery
        fullscreen={true}
        showFullscreenButton={false}
        items={images}
        showPlayButton={false}
        showThumbnails={false}
      />
    </div>
  );
};

export default MobileSwiper;
