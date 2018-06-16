import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Helmet from "react-helmet";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet title="Twitter - EveryInteract" />
          <Header />
          <Switch>
            <Route exact path="/EveryInteract" component={Main} />
            <Redirect exact from="/" to="/EveryInteract" />
          </Switch>
          <Main />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
