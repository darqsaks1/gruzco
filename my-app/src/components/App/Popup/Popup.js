import "./Popup.scss";

const PopupContent = () => {
  return (
    <div className="Popup">
      <div className="PopupContainer">
        <div className="PopupLinks">
          <h1>КОнтакты</h1>
          <span className="textPopup">
            Если у вас есть вопросы или нужна консультация, свяжитесь с нами!
            Оставьте заявку и мы перезвоним Вам в течение 30 минут
          </span>
          <div className="Links">
            <div>
              <span className="viber">
                <a href="viber://chat?number=%2B375339904077">Viber</a>
              </span>
              <span className="tg">
                <a href="https://t.me/gruzco">Telegram</a>
              </span>
              <span className="whatsapp">
                <a href="https://wa.me/375339904077">Whatsapp</a>
              </span>
            </div>
            <div>
              <span>
                <a className="tel-href" href="tel: +375 (33) 990-40-77">
                  +375 (33) 990-40-77
                </a>
              </span>
              <span className="hoverMail">gruzco@mail.ru</span>
            </div>
            <div className="mainButton123">
              <a className="href-popup" href="http://form.gruzco.by/">
                <span>Оставить заявку</span>
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
