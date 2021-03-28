import React from "react";
import classes from "./Navbar.css";
import NavbarItems from "./NavbarItems/NavbarItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../Logo/Logo";

const Navbar = (props) => (
  <header className={classes.Navbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavbarItems />
    </nav>
  </header>
);

export default Navbar;
