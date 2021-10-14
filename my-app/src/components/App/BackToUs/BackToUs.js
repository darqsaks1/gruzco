import "./BackToUs.scss";
import ad1 from "../../../assets/ad1.png";
import ad2 from "../../../assets/pick.png";
import ad3 from "../../../assets/pick3.png";
import ad4 from "../../../assets/pick4.png";
import ScrollableAnchor from "react-scrollable-anchor";

const BackToUs = () => {
  return (
    <div className="BackToUs">
      <ScrollableAnchor id={"BackToUs1"}>
        <div className="BackContainer">
          <h3>почему к нам приходят снова?</h3>
          <div className="imageContainer">
            <div className="imageList">
              <div className="back img1Back">
                <div>
                  <p className="title1">Качественный сервис</p>
                  <p className="text1">Ваше удобство - наша работа!</p>
                </div>
              </div>
              <div className="back img2Back">
                {" "}
                <div>
                  <p className="title1">Решение задач</p>
                  <p className="text1">Сила грузко в ваших руках!</p>{" "}
                </div>
              </div>
              {/* <img src={ad1} alt="ad1" />
              <img src={ad2} alt="ad2" /> */}
            </div>
            <div className="imageList">
              {" "}
              <div className="back img3Back">
                {" "}
                <div>
                  <p className="title1">Оптимизация затрат</p>
                  <p className="text1">Невозможное станет реальным!</p>{" "}
                </div>
              </div>
              <div className="back img4Back">
                {" "}
                <div>
                  <p className="title1">Экономия времени</p>
                  <p className="text1">
                    Выбирая качество - экономите время!
                  </p>{" "}
                </div>
              </div>
              {/* <img src={ad3} alt="ad1" />
              <img src={ad4} alt="ad1" /> */}
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default BackToUs;
