import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchProject, fetchProjects } from './actions/project_actions';

// testing
import { signup, login, logout } from './actions/session_actions'; // its the actions that dispatch login requests

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Show my slice of state
  window.store = store;
  window.getState = store.getState;
  window.fetchProjects = fetchProjects;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
