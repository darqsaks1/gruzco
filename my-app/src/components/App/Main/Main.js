import "./Main.scss";
import mainImg from "../../../assets/mainIMG.png";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist÷/index.css";
import PopupContent from "../Popup/Popup";
const Main = () => {
  return (
    <div className="Main">
      <div className="mainDiv">
        <h1 className='gruzMain'>gruz</h1>

        <p id="p1">Оставьте заявку и мы перезвоним Вам в течение 30 минут</p>
        <p>Грузчики от 10 р/час. Наличный и безналичный расчет!</p>
        <Popup
          trigger={<div className="mainButton">Заказать звонок</div>}
          position="center center"
          modal
        >
          <PopupContent />
        </Popup>
      </div>
      <div>
        <img src={mainImg} alt="main img desctopImg" className="desctopImg" />
        <img src={mainImg} alt="main img mobile" className="imgMobile" />
      </div>
    </div>
  );
};

export default Main;
