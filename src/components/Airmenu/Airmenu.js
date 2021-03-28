import React from "react";
import classes from "./Airmenu.css";

class Airmenu extends React.Component {
  render() {
    return (
      <div className="outerdiv">
        <div className={classes.Airmenu}>
          <iframe
            className={classes.iframe}
            title="Like a lord"
            src="https://www.airmenu.com/Like_a_Lord_Burgers"
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Airmenu;
