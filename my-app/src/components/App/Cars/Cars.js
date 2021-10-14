import "./Cars.scss";
import { car1, car2, car3, car4, car5, car6, car7, car8 } from "./carsObj";
import img1 from "../../../assets/car/img1.png";
import img2 from "../../../assets/car/img2.png";

import img3 from "../../../assets/car/img3.png";

import img4 from "../../../assets/car/img4.png";

import img5 from "../../../assets/car/img5.png";

import img6 from "../../../assets/car/im6.png";

import img7 from "../../../assets/car/img7.png";
import img8 from "../../../assets/car/img8.png";

const Cars = () => {
  return (
    <div className="Cars">
      <h3>Предоставляем технику</h3>
      <div class="carsContainer">
        <div className="big-block">
          <div class="block">
            <div className="carBlock">
              <div className="carImg">
                <img src={car1.img} className="img1CAR car1" />
              </div>
              <h3>{car1.name}</h3>
              <p>{car1.price}</p>
              <p>{car1.first_text}</p>
              <p>{car1.second_text}</p>
            </div>
            <div className="carBlock">
              <div className="carImg">
                <img src={car2.img} className="img1CAR car2" />
              </div>
              <h3>{car2.name}</h3>
              <p>{car2.price}</p>
              <p>{car2.first_text}</p>
              <p>{car2.second_text}</p>
            </div>
          </div>
          <div class="block">
            <div className="carBlock tractor">
              <div className="carImg">
                <img src={car3.img} className="img1CAR car3" />
              </div>
              <h3>{car3.name}</h3>
              <p>{car3.price}</p>
              <p>{car3.first_text}</p>
              <p>{car3.second_text}</p>
            </div>

            <div className="carBlock">
              <div className="carImg">
                <img src={car4.img} className="img1CAR car4" />
              </div>
              <h3>{car4.name}</h3>
              <p>{car4.price}</p>
              <p>{car4.first_text}</p>
              <p>{car4.second_text}</p>
            </div>
          </div>
        </div>
        <div className="big-block">
          <div class="block">
            <div className="carBlock">
              <div className="carImg">
                <img src={car5.img} className="img1CAR car5"  />
              </div>
              <h3>{car5.name}</h3>
              <p>{car5.price}</p>
              <p>{car5.first_text}</p>
              <p>{car5.second_text}</p>
            </div>
            <div className="carBlock">
              <div className="carImg">
                <img src={car6.img} className="img1CAR car6" />
              </div>
              <h3>{car6.name}</h3>
              <p>{car6.price}</p>
              <p>{car6.first_text}</p>
              <p>{car6.second_text}</p>
            </div>
          </div>
          <div class="block">
            <div className="carBlock tractor">
              <div className="carImg">
                <img src={car7.img} className="img1CAR car7" />
              </div>
              <h3>{car7.name}</h3>
              <p>{car7.price}</p>
              <p>{car7.first_text}</p>
              <p>{car7.second_text}</p>
            </div>

            <div className="carBlock">
              <div className="carImg">
                <img src={car8.img} className="img1CAR car8" />
              </div>
              <h3>{car8.name}</h3>
              <p>{car8.price}</p>
              <p>{car8.first_text}</p>
              <p>{car8.second_text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
