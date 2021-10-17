import React from "react";
import slide1 from "../../../assets/s1mob.png";
import ImageGallery from "react-image-gallery";
// import "~react-image-gallery/styles/scss/image-gallery.scss";
//
import slide2 from "../../../assets/s2mob.png";
import "./Swiper.scss";

import slide3 from "../../../assets/s3mob.png";
import slide4 from "../../../assets/s4mob.png";
import slide5 from "../../../assets/s5mob.png";
const images = [
  {
    original: slide2,
  },
  {
    original: slide1,
  },
  {
    original: slide4,
  },
  {
    original: slide5,
  },
  {
    original: slide3,
  },
  {
    original: slide4,
  },
];
const MobileSwiper = () => {
  return (
    <div class="PortfolioContainer1 ">
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
