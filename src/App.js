import React from 'react';
import { IntlProvider } from 'react-intl';
import {
  BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import Header from './Header';
import Main from './Main';
import Generic from './Generic';

export default () => (
  <IntlProvider locale="en">
    <Router>
      <React.Fragment>
        <Helmet title="EveryInteract (@EveryInteract) | Twitter" />
        <Header />
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route exact path="/moments" component={Generic} />
          <Route exact path="/notifications" component={Generic} />
          <Route exact path="/messages" component={Generic} />
          <Route exact path="/viewall" component={Generic} />
          <Route exact path="/find" component={Generic} />
          <Route exact path="/terms" component={Generic} />
          <Route exact path="/about" component={Generic} />
          <Route exact path="/help" component={Generic} />
          <Route exact path="/privacypolicy" component={Generic} />
          <Route exact path="/cookies" component={Generic} />
          <Route exact path="/ads" component={Generic} />
          <Route path="/:userid" component={Main} />
        </Switch>
      </React.Fragment>
    </Router>
  </IntlProvider>
);
