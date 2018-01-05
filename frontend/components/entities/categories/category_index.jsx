import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {

    const categories = this.props.categories.map( category => {
      return (
        <li key={category.id}>
          {category.name}
        </li>
      );
    });

    return (
      <div className="main-content category-index-container">
        <ul className="category-index">
          {categories}
        </ul>
      </div>
    );
  }

};

export default CategoryIndex;
