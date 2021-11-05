import "./Services.scss";
import ScrollableAnchor from "react-scrollable-anchor";

const Services = () => {
  return (
    <div className="Services">
      <ScrollableAnchor id={"services"}>
        <div className="ServicesBg">
          <div className="ourServcies">
            <h1>предоставляем услуги</h1>
          </div>
          <div className="servicesList">
            <div className="servicesBlock">
              <div className="servicesContainer">
                <h3>Грузчики от 8 р/час</h3>
                <ul>
                  <li>Разгрузка фур, вагонов, контейнеров</li>
                  <li>Перемещение и перестановка груза</li>
                  <li>Помощь при переездах</li>
                  <li>Погрузка - разгрузка стройматериалов</li>
                  <li>Помощь на складе</li>
                </ul>
              </div>
              <div className="servicesContainer">
                <h3>Разнорабочие от 9 р/час</h3>
                <ul>
                  <li>Сборка/разборка мебели</li>
                  <li>Земельные работы/прополка</li>
                  <li>Установка и ремонт заборов</li>
                  <li>Демонтажные/Монтажные работы</li>
                  <li>
                    Спил, обрезка, пересадка деревьев и кустарников, покос травы
                  </li>
                  <li>Вспашка и культивация</li>
                  <li>Уборка снега</li>
                </ul>
              </div>
            </div>
            <div className="servicesBlock">
              <div className="servicesContainer">
                <h3>Грузоперевозки/Утилизация</h3>
                <ul>
                  <li>Квартирные и офисные переезды</li>
                  <li>Перевозка различного оборудования </li>
                  <li>Перевозка строительных материалов</li>
                  <li>Перевозка изделий из стекла</li>
                  <li>Вывоз мусора, бытовых отходов и ненужного имущества </li>
                </ul>
              </div>
              <div className="servicesContainer">
                <h3>Такелажные работы</h3>
                <ul class='last-serv-ul'>
                  <li>
                    Перемещение пианино, рояля, аквариумов, стекол, зеркал,
                    тяжелого оборудования, бильярдных столов, джакузи, ванн,
                    тренажеров, сейфов, а также других тяжелых и
                    крупогабаритных единиц
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    </div>
  );
};

export default Services;
