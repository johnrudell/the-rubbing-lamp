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
import Footer from './entities/footer/footer_container';
import CategoryIndexContainer from './entities/categories/category_index_container';
import CategoryShowContainer from './entities/categories/category_show_container';
import CategoryShowAllContainer from './entities/categories/category_show_all_container';
import ProjectIndexContainer from './entities/projects/project_index_container';
import ProjectFormContainer from './entities/projects/project_form_container';
import ProjectShowContainer from './entities/projects/project_show_container';

import BackingIndexContainer from './entities/backings/backing_index_container';

import StatsContainer from './entities/stats/stats_container';


const App = () => (
  <div className="box">
    <Navbar />

    <div className="scroll">
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <Route exact path="/discover" component={ProjectIndexContainer} />
        <Route exact path='/categories/:categoryId/all' component={CategoryShowAllContainer} />
        <Route exact path="/projects/:projectId" component={ProjectShowContainer} />
        <ProtectedRoute exact path="/project/new" component={ProjectFormContainer} />
        <ProtectedRoute path='/projects/:projectId/edit' component={ProjectFormContainer}/>
        <ProtectedRoute path='/projects/:projectId/backing' component={BackingIndexContainer}/>
        <div>
          <Route path="/" component={StatsContainer} />
          <Route path="/" component={CategoryIndexContainer} />
        </div>

      </Switch>

      <Footer />
    </div>

  </div>
);

export default App;
