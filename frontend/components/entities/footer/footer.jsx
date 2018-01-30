import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render () {

    const categories = this.props.categories.map( category => {
      return (
        <li className="color-green-hover" key={category.id}>
          <Link className="decolor-link" to={`/categories/${category.id}/all`}>
            {category.name}
          </Link>
        </li>
      );
    });

    return (
      <footer className="row footer footer-container">
        <ul className="footer-category-list">
          {categories}
        </ul>

        <div className="copyright">
          The Rubbing Lamp, John Rudell © 2018
        </div>

        <ul className="portfolio-link-list">
          <li>
            <a className="color-green-hover" href="https://www.linkedin.com/in/johnrudell/">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="color-green-hover" href="https://github.com/johnrudell">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="color-green-hover" href="https://johnrudell.com/">
              <i className="fa fa-user" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a className="color-green-hover" href="https://angel.co/johnrudell">
              <i className="fa fa-angellist" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    )
  };
};

export default Footer;
