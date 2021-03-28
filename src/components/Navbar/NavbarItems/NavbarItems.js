import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import classes from "./NavbarItems.css";

const NavbarItems = (props) => (
  <ul className={classes.NavbarItems}>
    <NavbarItem link="/menu" exact>
      VER MENU
    </NavbarItem>
    <NavbarItem link="/aboutus" exact>
      SOBRE NÓS
    </NavbarItem>
    <NavbarItem link="/locations" exact>
      LOCALIZAÇÕES
    </NavbarItem>
  </ul>
);

export default NavbarItems;
