import React from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from './Header';
import Main from './Main';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <React.Fragment>
        <Helmet title="EveryInteract (@EveryInteract) | Twitter" />
        <Header />
        <Switch>
          <Route path="/:userid" component={Main} />
          <Redirect exact from="/" to="/EveryInteract" />
        </Switch>
      </React.Fragment>
    </Router>
  </IntlProvider>
);
