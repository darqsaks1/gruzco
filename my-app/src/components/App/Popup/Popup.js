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
          <span class='textPopup'>
            Оставьте заявку и мы перезвоним Вам втечение 30 минут. Если у вас
            есть вопросы или нужна консультация, свяжитесь с нами!
          </span>
          <div class="Links">
            <div>
              <span>+375 (29) 333–15–83</span>
              <span className="tg">Telegram</span>
              <span className="whatsapp">Whatsapp</span>
            </div>
            <div>
              {" "}
              <span>+375 (29) 114–72–77</span>
              <span className="viber">Viber</span>
              <span>info@gruzco.by</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
