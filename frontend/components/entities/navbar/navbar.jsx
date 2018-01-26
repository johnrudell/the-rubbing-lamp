import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {

  const session = currentUser ?
    <button className="session-button" onClick={logout}>Log out</button> :
    <Link className="session-button" to="/login">Sign in</Link>

  const username = currentUser ? <span>{currentUser.username}</span> : ""

  return (
    <nav className="row header navbar">
      <ul className="nav-left nav-list">
        <li className="nav-outer-link">
          <Link className="decolor-link" to="/discover">Explore</Link>
        </li>
        <li>
          <Link className="decolor-link" to="/project/new">Make a wish</Link>
        </li>
      </ul>

      <Link className="nav-center" to="/">The Rubbing Lamp</Link>

      <ul className="nav-right nav-list">
        <li className="search">
          Hi, {username}!
        </li>
        <li className="nav-outer-link">
          {session}
        </li>
      </ul>
    </nav>
  );

  // <span>Search</span>
  // <i className="fa fa-search" aria-hidden="true"></i>
}

export default Navbar;
