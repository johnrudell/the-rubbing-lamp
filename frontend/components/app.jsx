import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="box">

    <nav className="row header temp-nav">
      <ul className="temp-nav-left temp-nav-list">
        <li>Explore</li>
        <li>Make a wish</li>
      </ul>

      <Link className="temp-nav-center" to="/">The Rubbing Lamp</Link>

      <GreetingContainer />
    </nav>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
