import React from "react";
import Logo from "../Logo/Logo";
import NavbarItems from "../Navbar/NavbarItems/NavbarItems";
import classes from "./SideDrawer.css";
import BackDrop from "../Backdrop/Backdrop";
// import Aux from "../../../hoc/Aux/Aux";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <div>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavbarItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </div>
  );
};

export default SideDrawer;
