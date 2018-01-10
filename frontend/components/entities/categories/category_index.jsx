import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import CategoryShowContainer from './category_show_container';

class CategoryIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {

    const categories = this.props.categories.map( category => {
      return (
        <li key={category.id}>
          <NavLink className="decolor-link" to={`/categories/${category.id}`}>
            {category.name}
          </NavLink>
        </li>
      );
    });

    // <img className="placeholder-splash" src="https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg"></img>
    return (
      <div className="main-content">
        <ul className="category-index">
          {categories}
        </ul>
        <div>
          <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />
          <Route exact path='/' component={CategoryShowContainer} />
        </div>
      </div>
    );
  }

};

export default CategoryIndex;
