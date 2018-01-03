import React from 'react';
// import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render () {
    return (
      <footer className="row footer footer-container">
        <ul className="footer-category-list">
          <li>Arts</li>
          <li>Comics & Illustration</li>
          <li>Design & Tech</li>
          <li>Film</li>
          <li>Food & Craft</li>
          <li>Games</li>
          <li>Music</li>
          <li>Publishing</li>
        </ul>

        <div className="copyright">
          The Rubbing Lamp, John Rudell © 2018
        </div>

        <ul className="portfolio-link-list">
          <li>
            <a className="portfolio-link" href="https://github.com/johnrudell">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="portfolio-link" href="https://www.linkedin.com/in/johnrudell/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="portfolio-link" href="http://johnrudell.com/">
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  };
};

export default Footer;
