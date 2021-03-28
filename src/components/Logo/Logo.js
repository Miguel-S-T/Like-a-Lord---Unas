import React from "react";
import classes from "./Logo.css";
import LogoLord from "../../../src/assets/LaL_LogoFinal-01.png";

const logo = (props) => (
  <div className={classes.Logo}>
    <a href="/">
      <img src={LogoLord} alt="LogoBurger" />
    </a>
  </div>
);

export default logo;
