import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component {

  render() {
    const { project } = this.props;

    const daysToGo = (end_date) => {
      const oneDay = 24 * 60 * 60 * 1000; // seconds in one day
      const date1 = Date.parse(new Date());
      const date2 = Date.parse(end_date);

      const dayDifference = Math.round(Math.abs((date1 - date2) / oneDay));

      if (date2 < date1) {
        return "This wish has been granted!";
      } else {
        return dayDifference + " days to go";
      }
    };

    const percentFunded = Math.floor(
      (project.funding_raised/project.funding_goal) * 100);

    return (
      <li className="project-list-item">
        <img className="project-img" src={project.img_url} />
        <div className="info-container">
          <div className="project-title">{project.title}</div>
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
          <div className="project-category">{project.category.name}</div>
        </div>
      </li>
    );
  }
};

export default ProjectIndexItem;
