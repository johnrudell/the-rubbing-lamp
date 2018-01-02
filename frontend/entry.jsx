import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing
import { signup, login, logout } from './actions/session_actions'; // its the actions that dispatch login requests

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // testing
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
