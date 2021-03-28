import React from "react";
import { Dropdown } from "react-bootstrap";
import classes from "./Dropdown.css";

function Dropdown2() {
  return (
    <div className={classes.dropdownDiv}>
      <Dropdown>
        <Dropdown.Toggle
          className={classes.dropdownBtn}
          variant="success"
          id="dropdown-basic"
        >
          BURGERS
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes.dropdownMenu}>
          <Dropdown.Item href="#acompanhamentos">ACOMPANHAMENTOS</Dropdown.Item>
          <Dropdown.Item href="#sobremesas">SOBREMESAS</Dropdown.Item>
          <Dropdown.Item href="#bebidas">BEBIDAS</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropdown2;
