import React, { useState } from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import telegram from "../main";
import Header from "../components/App/Header/Header";
import Main from "../components/App/Main/Main";
import Services from "../components/App/Services/Services";
import Portfolio from "../components/App/Portfolio/Portfolio";
import Work from "../components/App/Work/Work";
import BackToUs from "./App/BackToUs/BackToUs";
import Cars from "../components/App/Cars/Cars";
import OurPartners from "../components/App/OurPartners/OurPartners";
import Footer from "../components/App/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import { Burger, Menu } from "./App/Header/components";
import { theme } from "./theme";

const App = () => {
  const menuId = "main-menu";
  const [open, setOpen] = useState(false);
  telegram();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App" id="App">
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} setOpen={setOpen} id={menuId} />
          <div className="headerMain">
            <Header />
            <Main />
          </div>
          <Services />
          <Portfolio />
          <Work />
          <BackToUs />
          <Cars />
          <OurPartners />
          <Footer />
        </div>{" "}
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
