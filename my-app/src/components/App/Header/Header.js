import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="Header">
      <div className="headerContainer">
        <div class="anchorsContainer">
          <a href="#services">Услуги</a>
          <a href="#Portfolio">Портфолио</a>
          <a href="#workS">Этапы работы</a>
          <a href="#BackToUs1">Преимущества</a>
          <a href="#Footer1">Контакты</a>
        </div>
        <div className="telContainer">
          <a href="tel:+375 (29) 114–72–771">+375 (29) 114–72–77</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
