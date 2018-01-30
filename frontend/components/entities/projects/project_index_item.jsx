import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';
import {
  percentFundedFunction,
  progressFundedFunction,
  daysToGo,
  numberWithCommas
} from '../../../util/project_util';

class ProjectIndexItem extends React.Component {

  render() {
    const { project } = this.props;

    if (project.funding === null) project.funding = project.funding_raised;

    const percentFunded = percentFundedFunction(project.funding, project.funding_goal);
    const progressFunded = progressFundedFunction(project.funding, project.funding_goal);

    return (
      <li className="project-list-item">
        <Link to={`/projects/${project.id}`}>
          <img className="project-img" src={project.imageUrl} />
        </Link>
        <div className="info-container">
          <Link className="project-title" to={`/projects/${project.id}`}>
            {project.title}
          </Link>
          <div className="project-author">by {project.author.username}</div>
          <Line className="progress-bar"
            percent={progressFunded}
            strokeLinecap="square"
            trailWidth="1"
            strokeWidth="1"
            trailColor="#e8e8e8"
            strokeColor="#0f7262" />
          <div className="project-funding">${numberWithCommas(project.funding)} pledged</div>
          <div className="project-percent">{percentFunded}% funded</div>
          <div className="project-deadline">
            {daysToGo(project.deadline, project.funding, project.funding_goal)}
          </div>
          <div className="project-category">
            <Link className="project-category-link" to={`/categories/${project.category.id}/all`}>
              {project.category.name}
            </Link>
          </div>
        </div>
      </li>
    );
  }
};

export default ProjectIndexItem;
