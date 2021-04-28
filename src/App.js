import React from "react";
import "./components/fontAwesomeIcons";
import styles from "./App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
/* 
import Details from "./pages/details/Details";
import About from "./pages/about/About";
import Patterns from "./pages/patterns/Patterns";
import Videos from "./pages/videos/Videos";
*/

function App() {
  return (
    <div className={styles.app}>
     <Router>
      <Switch>
					<Route exact path="/">
					<Home/>
					</Route>
{/* 
					<Route exact path="/detail/:id">
					<Details/>
					</Route>

					<Route exact path="/about" >
					<About/>
					</Route>

					<Route exact path="/patterns">
					<Patterns/>
					</Route>

					<Route exact path="/videos">
					<Videos/>
					</Route>
*/}
				</Switch>
    </Router>
    </div>
  );
}

export default App;
