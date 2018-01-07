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

    return (
      <div className="main-content">
        <ul className="category-index">
          {categories}
        </ul>
        <div>
          <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />
        </div>
      </div>
    );
  }

};

export default CategoryIndex;
