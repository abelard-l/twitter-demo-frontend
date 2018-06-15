import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect, withRouter } from "react-router";
import Helmet from "react-helmet";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Helmet title="Twitter - EveryInteract" />
          <Header />
          <Main />
          <Redirect to="/EveryInteract" />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
