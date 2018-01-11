import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';
import { percentFundedFunction, daysToGoNoString, numberWithCommas } from '../../../util/project_util';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  render() {
    const { project, currentUser } = this.props;

    if (!project) return null;

    const percentFunded = percentFundedFunction(project.funding_raised, project.funding_goal);

    let updateButton;
    if (currentUser && currentUser.id === project.author.id) {
      updateButton = (
        <Link className="update-button"
          to={`/projects/${project.id}/edit`}>
          Rethink your wish
        </Link>
      );
    } else {
      updateButton = "";
    }


    return (
      <div className="project-show">
        <div className="p-show-top">
          <div className="p-show-author">
            By {project.author.username}
          </div>
          <div className="p-show-header">
            <h1>{project.title}</h1>
            <p>{project.short_blurb}</p>
          </div>
          <div className="p-show-update">
            {updateButton}
          </div>
        </div>
        <div className="p-show-middle">
          <img className="p-show-img" src={project.image} />
          <div className="p-show-info">
            <Line className="progress-bar"
              percent={percentFunded}
              strokeLinecap="square"
              trailWidth="1"
              strokeWidth="1"
              trailColor="#e8e8e8"
              strokeColor="#0f7262" />
            <div className="p-show-funding p-show-info-item">${project.funding_raised}</div>
            <p>pledged of ${numberWithCommas(project.funding_goal)} goal</p>
            <div className="p-show-info-item">59</div>
            <p>backers</p>
            <div className="p-show-info-item">{daysToGoNoString(project.deadline)}</div>
            <p>days to go</p>
            <button className="back-button">Back this wish</button>
          </div>
        </div>
        <div className="p-show-bottom">
          <div className="about-container">
            <h3>About</h3>
            <div className="about">
              {project.description}
            </div>
          </div>
          <div className="support-container">
            <h3>Support</h3>
            <ul className="reward-item-list">
              <li className="reward-item">
                <p className="pledge-text">Make a pledge without a reward</p>
                <div className="pledge-input">
                  <div className="pledge-sign">$</div>
                  <input type="number"
                    />
                </div>
              </li>
              <li className="reward-item">
                <div className="reward-content">Reward Item</div>
                <p className="reward-hover-content">Select this reward</p>
              </li>
              <li className="reward-item">
                <div className="reward-content">Reward Item</div>
                <p className="reward-hover-content">Select this reward</p>
              </li>
              <li className="reward-item">
                <div className="reward-content">Reward Item</div>
                <p className="reward-hover-content">Select this reward</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectShow;
