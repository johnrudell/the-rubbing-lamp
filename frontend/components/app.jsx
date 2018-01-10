import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import Navbar from './entities/navbar/navbar_container';
import SessionFormContainer from './session/session_form_container';
import Footer from './entities/footer/footer';
import CategoryIndexContainer from './entities/categories/category_index_container';
import CategoryShowContainer from './entities/categories/category_show_container';
import ProjectIndexContainer from './entities/projects/project_index_container';
import ProjectFormContainer from './entities/projects/project_form_container';
import ProjectShowContainer from './entities/projects/project_show_container';


const App = () => (
  <div className="box">
    <Navbar />

    <div className="scroll">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route exact path="/discover" component={ProjectIndexContainer} />
        <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
        <ProtectedRoute exact path="/project/new" component={ProjectFormContainer} />
        <ProtectedRoute path='/projects/:projectId/edit' component={ProjectFormContainer}/>
        <Route path="/" component={CategoryIndexContainer} />

      </Switch>

      <Footer />
    </div>

  </div>
);

export default App;
