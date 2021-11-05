import "./Popup.scss";
import ad1 from "../../../assets/ad1.png";
import ad2 from "../../../assets/pick.png";
import ad3 from "../../../assets/pick3.png";
import ad4 from "../../../assets/pick4.png";
import ScrollableAnchor from "react-scrollable-anchor";
import footerMan from "../../../assets/footerMan.png";

const PopupContent = () => {
  return (
    <div className="Popup">
      <div className="PopupContainer">
        <div class="PopupLinks">
          <h1>КОнтакты</h1>
          <span class="textPopup">
            Если у вас есть вопросы или нужна консультация, свяжитесь с нами!
            Оставьте заявку и мы перезвоним Вам втечение 30 минут
          </span>
          <div class="Links">
            <div>
              <span className="viber"><a href="viber://chat?number=%2B375339904077">Viber</a></span>
              <span className="tg"><a href='https://t.me/gruzco'>Telegram</a></span>
              <span className="whatsapp"><a href='https://wa.me/375339904077'>Whatsapp</a></span>
            </div>
            <div>
              <span>
                <a className="tel-href" href="tel: +375 (33) 990-40-77">
                  +375 (29) 990-40-77
                </a>
              </span>
              <span>info@gruzco.by</span>
            </div>
            <div className="mainButton123">
              <a class="href-popup" href="http://form.gruzco.by/">
                Оставить заявку
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
