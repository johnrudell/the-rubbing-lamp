import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';
import { percentFundedFunction } from '../../../util/project_util';
import { Link } from 'react-router-dom';

class CategoryShowAll extends React.Component {
  componentDidMount() {
    if (!this.props.match.params.categoryId) {
      this.props.fetchCategory(1);
    } else {
      this.props.fetchCategory(this.props.match.params.categoryId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.categoryId !== nextProps.match.params.categoryId) {
      if (!this.props.match.params.categoryId) {
        this.props.fetchCategory(1);
      } else {
        this.props.fetchCategory(nextProps.match.params.categoryId);
      }
    }
  }

  render() {
    const { category, projects } = this.props;

    if (!category) return null;

    if (!projects) {
      return <div>There are no projects for this category yet.</div>;
    } else {
      const projects = this.props.projects.map(project => {
        return (
          <ProjectIndexItem key={project.id} project={project} />
        );
      });

      // const percentFunded = percentFundedFunction(project.funding_raised, project.funding_goal);

      return (
        <div className="main-content project-index">
          <h3 className="project-index-header">Explore
            <span className="color-green bold"> {this.props.projects.length} projects</span>
            <p className="project-index-category">in {category.name}</p>
          </h3>
          <ul className="project-index-list">
            {projects}
          </ul>
        </div>
      );

    }

  }
}

export default CategoryShowAll;
