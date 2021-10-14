import "./Work.scss";
import illustr2 from "../../../assets/illustr2.png";
import ScrollableAnchor from "react-scrollable-anchor";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist÷/index.css";
import PopupContent from "../Popup/Popup";
const Work = () => {
  return (
    <div className="Work">
      {" "}
      <Popup
        trigger={<div className="mainButton1">Оформить заявку</div>}
        position="center center"
        modal
      >
        <PopupContent />
      </Popup>
      <ScrollableAnchor id={"workS"}>
        <div className="WorkContainer">
          <h3>Как мы работаем</h3>
          <div class="WorkWrapper">
            <img src={illustr2} />
            <div className="list list1">
              <div class="firstContainer">
                <div className="listblock">
                  <div className="titleList">
                    <span>01</span> Обработка заявки
                  </div>
                  <p>Оформляете заявку по телефону или в письменной форме</p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>03</span> Расчет и согласование
                  </div>
                  <p>
                    Производится расчет стоимости заказа и согласовывается с
                    клиентом
                  </p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>05</span> Выполнение работы
                  </div>
                  <p>Аккуратные грузчики выполняют работу точно и в срок</p>
                </div>
              </div>
              <div className="secondContainer">
                <div className="listblock">
                  <div className="titleList">
                    <span>02</span> Уточнение деталей
                  </div>
                  <p>
                    Наш менеджер уточняет детали заказа для расчета стоимости{" "}
                  </p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>04 </span> Оформление заказа
                  </div>
                  <p>Менеджер регистрирует ваш заказ в нашей базе</p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>06 </span> Оплата услуги
                  </div>
                  <p>Производится оплата согласно установленных тарифов</p>
                </div>
              </div>
            </div>{" "}
            <div className="list list2">
              <div class="firstContainer">
                <div className="listblock">
                  <div className="titleList">
                    <span>01</span> Обработка заявки
                  </div>
                  <p>Оформляете заявку по телефону или в письменной форме</p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>02</span> Уточнение деталей
                  </div>
                  <p>
                    Наш менеджер уточняет детали заказа для расчета стоимости{" "}
                  </p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>03</span> Расчет и согласование
                  </div>
                  <p>
                    Производится расчет стоимости заказа и согласовывается с
                    клиентом
                  </p>
                </div>{" "}
                <div className="listblock">
                  <div className="titleList">
                    <span>04 </span> Оформление заказа
                  </div>
                  <p>Менеджер регистрирует ваш заказ в нашей базе</p>
                </div>
              </div>
              <div className="secondContainer">
                <div className="listblock">
                  <div className="titleList">
                    <span>05</span> Выполнение работы
                  </div>
                  <p>Аккуратные грузчики выполняют работу точно и в срок</p>
                </div>
                <div className="listblock">
                  <div className="titleList">
                    <span>06 </span> Оплата услуги
                  </div>
                  <p>Производится оплата согласно установленных тарифов</p>
                </div>
              </div>
            </div>{" "}
          </div>
          <div></div>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default Work;
