import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import { IntlProvider } from "react-intl";
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
      <IntlProvider locale="en">
        <Router>
          <React.Fragment>
            <Helmet title="Twitter - EveryInteract" />
            <Header />
            <Switch>
              <Route exact path="/EveryInteract" component={Main} />
              <Redirect exact from="/" to="/EveryInteract" />
            </Switch>
          </React.Fragment>
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
