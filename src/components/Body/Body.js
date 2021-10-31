import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";

import "./Body.scss";

const Body = () => {
  return (
    <main>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </main>
  );
};

export default Body;
