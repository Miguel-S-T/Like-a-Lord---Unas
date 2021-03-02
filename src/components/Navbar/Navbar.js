import React from "react";
import "./Navbar.css";
import NavbarItems from "./NavbarItems/NavbarItems";
// import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Navbar = (props) => (
  <header className="Navbar">
    {/* <DrawerToggle clicked={props.drawerToggleClicked} /> */}
    <nav className="DesktopOnly">
      <NavbarItems />
    </nav>
  </header>
);

export default Navbar;
