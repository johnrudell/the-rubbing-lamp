import React from 'react';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render () {
    return (
      <footer className="row footer footer-container">
        <ul className="placeholder footer-category-list">
          <li className="color-green-hover">Arts</li>
          <li className="color-green-hover">Comics & Illustration</li>
          <li className="color-green-hover">Design & Tech</li>
          <li className="color-green-hover">Film</li>
          <li className="color-green-hover">Food & Craft</li>
          <li className="color-green-hover">Games</li>
          <li className="color-green-hover">Music</li>
          <li className="color-green-hover">Publishing</li>
        </ul>

        <div className="copyright">
          The Rubbing Lamp, John Rudell © 2018
        </div>

        <ul className="portfolio-link-list">
          <li>
            <a className="color-green-hover" href="https://github.com/johnrudell">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="color-green-hover" href="https://www.linkedin.com/in/johnrudell/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="color-green-hover" href="http://johnrudell.com/">
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  };
};

export default Footer;
