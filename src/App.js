import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Quiz from "./components/Quiz";

import About from "./components/About";
import Courses from "./components/Course";
import Credits from "./components/Credits";
import Contact from "./components/Contact";



export default function App() {
  return (
    
    <Router>
      <Nav />
      
      <Switch>
        <Route path={process.env.PUBLIC_URL + "/"} exact>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/quiz"} exact>
          <Quiz />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/about"} exact>
          <About />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/course"} exact>
          <Courses />
        </Route>
       <Route path={process.env.PUBLIC_URL + "/contact"} exact>
          <Contact />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/credits"} exact>
          <Credits />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}
