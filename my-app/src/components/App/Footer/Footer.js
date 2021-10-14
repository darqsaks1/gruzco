import React from "react";
import "./Footer.scss";
import footerMan from "../../../assets/footerMan.png";
import footerMan1 from "../../../assets/footerIMG123.png";

import ScrollableAnchor from "react-scrollable-anchor";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist÷/index.css";
import PopupContent from "../Popup/Popup";
const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer">
        <ScrollableAnchor id={"Footer1"}>
          <div className="FooterContainer">
            <div class="FooterLinks">
              <h1>КОнтакты</h1>
              <h2>
                <a>+375 (29) 333–15–83</a>
              </h2>
              <p>
                Оставьте заявку и мы перезвоним вам втечение 30 минут. Если у
                вас есть вопросы или нужна консультация, свяжитесь с нами!
              </p>
              <div class="Links">
                <div>
                  {" "}
                  <a>+375 (29) 114–72–77</a>
                  {/* <a>+375 (29) 333–15–83</a> */}
                  <a href="  " className="tg">
                    Telegram
                  </a>
                  <a className="whatsapp">Whatsapp</a>
                </div>
                <div>
                  {" "}
                  <a className="viber">Viber</a>
                  <a>info@gruzco.by</a>
                </div>
              </div>
            </div>
            <img src={footerMan} alt="footerIMG" className="fotIMG1" />{" "}
            <img src={footerMan1} alt="footerIMG" className="fotIMG2" />
          </div>
        </ScrollableAnchor>{" "}
      </div>{" "}
    </React.Fragment>
  );
};

export default Footer;
