import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';
import { percentFundedFunction, daysToGo } from '../../../util/project_util';

class ProjectIndexItem extends React.Component {

  render() {
    const { project } = this.props;

    const percentFunded = percentFundedFunction(project.funding_raised, project.funding_goal);

    return (
      <li className="project-list-item">
        <Link to={`/projects/${project.id}`}>
          <img src={project.img_url} />
          <img className="project-img" src={project.img_url} />
        </Link>
        <div className="info-container">
          <Link className="project-title" to={`/projects/${project.id}`}>
            {project.title}
          </Link>
          <div className="project-author">by {project.author.username}</div>
          <Line className="progress-bar"
            percent={percentFunded}
            strokeLinecap="square"
            trailWidth="1"
            strokeWidth="1"
            trailColor="#e8e8e8"
            strokeColor="#0f7262" />
          <div className="project-funding">${project.funding_raised} pledged</div>
          <div className="project-percent">{percentFunded}% funded</div>
          <div className="project-deadline">{daysToGo(project.deadline)}</div>
          <div className="placeholder project-category">{project.category.name}</div>
        </div>
      </li>
    );
  }
};

export default ProjectIndexItem;
