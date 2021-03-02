import React from "react";
import NavbarItem from "./NavbarItem/NavbarItem";
import "./NavbarItems.css";

const NavbarItems = (props) => (
  <ul className="NavbarItems">
    <NavbarItem link="/" exact>
      Home
    </NavbarItem>
  </ul>
);

export default NavbarItems;
