import React from "react";
import "./Footer.scss";
import footerMan from "../../../assets/footerMan.png";
import footerMan1 from "../../../assets/footerIMG123.png";
import ScrollableAnchor from "react-scrollable-anchor";
 
const Footer = () => {
  return (
    <React.Fragment>
      <div className="Footer">
        <ScrollableAnchor id={"Footer1"}>
          <div className="FooterContainer">
            <div className="FooterLinks">
              <h1>КОнтакты</h1>
              <h2>
                <a className="tel-href" href="tel: +375 (33) 990-40-77">
                  +375 (33) 990-40-77
                </a>
              </h2>
              <p>
                Оставьте заявку и мы перезвоним Вам в течение 30 минут. Если у
                Вас есть вопросы или нужна консультация, свяжитесь с нами!
              </p>
              <p>Грузко Бай - сервис для Вас!</p>
              <div className="Links">
                <div>
                  {" "}
                  <a href="https://www.instagram.com/gruzco.by/">Instagram</a>
                  {/* <a>+375 (29) 333–15–83</a> */}
                  <a href="https://t.me/gruzco" className="tg">
                    Telegram
                  </a>
                  <a className="whatsapp" href="https://wa.me/375339904077">
                    Whatsapp
                  </a>
                </div>
                <div>
                  {" "}
                  <a
                    href="viber://chat?number=%2B375339904077"
                    className="viber"
                  >
                    Viber
                  </a>
                  <a className="hoverMail">gruzco@mail.ru</a>
                </div>
              </div>
            </div>
            <img src={footerMan} alt="footerIMG" className="fotIMG1" />{" "}
            <img src={footerMan1} alt="footerIMG" className="fotIMG2" />
          </div>
        </ScrollableAnchor>{" "}
      </div>{" "}
      <div className="ip">ИП Райчёнок Кирилл Алексеевич </div>{" "}
      <div className="ip"> УНП 391542375</div>
    </React.Fragment>
  );
};

export default Footer;
