import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Main />
          <Redirect to="/EveryInteract" />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
