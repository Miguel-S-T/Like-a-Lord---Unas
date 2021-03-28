import React, { useState, useRef } from "react";
import { Route, Link } from "react-router-dom";
import { Button, Overlay, Popover } from "react-bootstrap";
import classes from "./Popover.css";
import Locations from "../Locations/Locations";

function Popover2() {
  function Example() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    return (
      <div ref={ref}>
        <Button className={classes.ButtonPop} onClick={handleClick}>
          ENCOMENDAR
        </Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
        >
          <Popover id="popover-contained">
            {/* <Popover.Title as="h3" className={classes.BoxTitle}>
              {" "}
              <a
                href="https://www.airmenu.com/Like_a_Lord_Burgers"
                className={classes.anchorTag}
              >
                {" "}
                <p className={classes.Title}>ONLINE</p>
              </a>
              
            </Popover.Title> */}
            <Popover.Title as="h3" className={classes.BoxTitle}>
              {" "}
              <Link to="/locations" className={classes.anchor}>
                {" "}
                {/* <p className={classes.Title}>TELEFONE</p> */}
                <p className={classes.Title}>ONLINE</p>
              </Link>
              <Route path="/locations" component={Locations} exact />
            </Popover.Title>
          </Popover>
        </Overlay>
      </div>
    );
  }

  return (
    <>
      <Example />
    </>
  );
}

export default Popover2;
