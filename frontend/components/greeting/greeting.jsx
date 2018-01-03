import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <ul className="temp-nav-right temp-nav-list login-signup">
    <li>
      <span>Search</span>
      <i className="fa fa-search" aria-hidden="true"></i>
    </li>
    <li>
      <Link to="/login">Sign in</Link>
    </li>
  </ul>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
