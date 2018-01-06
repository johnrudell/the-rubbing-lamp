import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.categoryId);
  }

  render() {
    debugger
    const projects = this.props.projects.map((project, idx) => {
      <li key={idx}>{project.title}</li>
    });
    console.log("testing!");
    return (
      <div>
        {this.props.category.name}
        {projects}
        <p>check</p>
      </div>
    );
  }
}

export default CategoryShow;
