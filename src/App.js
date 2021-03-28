import classes from "./App.css";
import { Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Homepage from "./components/Homepage/Homepage";
import Locations from "./components/Locations/Locations";
import AboutUs from "./components/AboutUs/AboutUs";

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/menu" exact>
          {" "}
          <Menu />
        </Route>
        <Route path="/locations" exact>
          <Locations />
        </Route>
        <Route path="/aboutus">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
