import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {

  const session = currentUser ?
    <button className="session-button" onClick={logout}>Log out</button> :
    <Link className="session-button" to="/login">Sign in</Link>

  return (
    <nav className="row header navbar">
      <ul className="nav-left nav-list">
        <li>
          <Link className="decolor-link" to="/discover">Explore</Link>
        </li>
        <li>Make a wish</li>
      </ul>

      <Link className="nav-center" to="/">The Rubbing Lamp</Link>

      <ul className="nav-right nav-list">
        <li>
          <span>Search</span>
          <i className="fa fa-search" aria-hidden="true"></i>
        </li>
        <li>
          {session}
        </li>
      </ul>
    </nav>
  );

}

export default Navbar;
