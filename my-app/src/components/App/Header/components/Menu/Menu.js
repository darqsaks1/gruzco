import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import "./Menu.scss";
const Menu = ({ open, setOpen,...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="anchorsContainer1">
        <a href="#services" onClick={() => setOpen(!open)}>Услуги</a>
        <a href="#Portfolio" onClick={() => setOpen(!open)}>Портфолио</a>
        <a href="#workS" onClick={() => setOpen(!open)}>Этапы работы</a>
        <a href="#BackToUs1" onClick={() => setOpen(!open)}>Преимущества</a>
        <a href="#Footer1" onClick={() => setOpen(!open)}>Контакты</a>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
