import "./components/fontAwesomeIcons";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import { Patterns } from "./pages/patterns/Patterns";
import { About } from "./pages/about/About";
import { Videos } from "./pages/videos/Videos";
import { Details } from "./pages/details/Details";
import { Shop } from "./shop/Shop";
/* 



*/

function App() {
  return (
    <div className={styles.app}>
      <Shop>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/oppskrifter">
              <Patterns />
            </Route>

            <Route exact path="/om_oss">
              <About />
            </Route>

            <Route exact path="/videoer">
              <Videos />
            </Route>
            <Route exact path="/oppskrifter/detaljer/:id">
              <Details />
            </Route>
          </Switch>
        </Router>
      </Shop>
    </div>
  );
}

export default App;
