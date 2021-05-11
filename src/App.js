import classes from "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import Homepage from "./components/Homepage/Homepage";
import Locations from "./components/Locations/Locations";
import AboutUs from "./components/AboutUs/AboutUs";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className={classes.App}>
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/menu' exact>
          {" "}
          <Menu />
        </Route>
        <Route path='/locations' exact>
          <Locations />
        </Route>
        <Route path='/aboutus' exact>
          <AboutUs />
        </Route>
        <Route path='*'>
          <NotFoundPage />
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
