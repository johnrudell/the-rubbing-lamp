import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Navbar from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import Footer from './footer/footer';

const App = () => (
  <div className="box">
    <Navbar />

    <div className="scroll">
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />

      <Footer />
    </div>

  </div>
);

export default App;
