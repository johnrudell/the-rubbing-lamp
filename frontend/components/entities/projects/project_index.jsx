import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const projects = this.props.projects.map(project => {
      return (
        <ProjectIndexItem
          key={project.id}
          project={project} />
      );
    });

    return (
      <div className="main-content project-index">
        <h3 className="project-index-header">Explore
          <span className="color-green bold"> {this.props.projects.length} projects</span>
        </h3>
        <ul className="project-index-list">
          {projects}
        </ul>
      </div>
    );
  }

}

export default ProjectIndex;
