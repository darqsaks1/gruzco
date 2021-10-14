import "./OurPartners.scss";
import a1 from "../../../assets/partners/1.png";
import a2 from "../../../assets/partners/2.png";
import a3 from "../../../assets/partners/3.png";
import a4 from "../../../assets/partners/4.png";
import a5 from "../../../assets/partners/5.png";
import a6 from "../../../assets/partners/6.png";
import a7 from "../../../assets/partners/7.png";
import a8 from "../../../assets/partners/8.png";
import a9 from "../../../assets/partners/9.png";
import a10 from "../../../assets/partners/10.png";
import a11 from "../../../assets/partners/11.png";
import a12 from "../../../assets/partners/12.png";
import a13 from "../../../assets/partners/13.png";
import a14 from "../../../assets/partners/14.png";
import a15 from "../../../assets/partners/15.png";
import a16 from "../../../assets/partners/16.png";
import a17 from "../../../assets/partners/17.png";
import a18 from "../../../assets/partners/18.png";
import a19 from "../../../assets/partners/19.png";
import a20 from "../../../assets/partners/20.png";

const images = [
  a1,
  a2,
  a3,
  a4,
  a5,
  a6,
  a7,
  a8,
  a9,
  a10,
  a11,
  a12,
  a13,
  a14,
  a15,
  a16,
  a17,
  a18,
  a19,
  a20,
];
const OurPartners = () => {
  const imgList = images.map((item) => {
    return (
      <div>
        <img src={item} alt="alt1" />
      </div>
    );
  });
  return (
    <div className="wow fadeIn " data-wow-delay="0.3s" data-wow-duration="1s">
      <div className="OurPartners">
        
        <div className="OurPartnersContainer">
          <h3>Наши Партнеры</h3>
          <div className="OurPartnersList">{imgList}</div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;
