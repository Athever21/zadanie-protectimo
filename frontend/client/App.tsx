import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import PeopleList from "./components/PeopleList";
import AddNew from "./components/AddNew";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/new">
            <AddNew />
          </Route>
          <Route path="/">
            <PeopleList />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default hot(module)(App);