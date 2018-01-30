import React from 'react';
import { Line, Circle } from 'rc-progress';
import { Link } from 'react-router-dom';
import {
  percentFundedFunction,
  progressFundedFunction,
  daysToGoNoString,
  numberWithCommas
} from '../../../util/project_util';
import { formatDeadline } from '../../../util/time_util';
import RewardIndex from '../rewards/reward_index';

class ProjectShow extends React.Component {

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  renderWishGrantedConditional() {
    const daysToGo = (
      daysToGoNoString(
        this.props.project.deadline,
        this.props.project.funding,
        this.props.funding_goal)
    );

    if (typeof daysToGo === "string") {
      return null;
    } else {
      return 'days to go';
    }
  }

  render() {
    const { project, currentUser } = this.props;

    if (!project || !project.category) return null;
    if (project.total_backers === null) project.total_backers = 0;

    const percentFunded = percentFundedFunction(project.funding, project.funding_goal);
    const progressFunded = progressFundedFunction(project.funding, project.funding_goal);

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

    const backerText = project.total_backers === 1 ? "backer" : "backers"

    return (
      <div className="main-content project-show">
        <div className="p-show-top">
          <div className="p-show-author">
            <img className="author-img"
              src="https://ksr-ugc.imgix.net/missing_user_avatar.png?w=40&h=40&fit=crop&v=&auto=format&q=92&s=8c0db61c92692000c2678b375fc31714" />
            <p className="author-name">By {project.author.username}</p>
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
          <div className="p-show-middle-left">
            <img className="p-show-img" src={project.imageUrl} />
            <Link className="p-show-category" to={`/categories/${project.category.id}/all`}>
              <i className="fa fa-compass" aria-hidden="true"></i>
              <p className="p-show-category-name">{project.category.name}</p>
            </Link>
          </div>
          <div className="p-show-middle-right">
            <Line className="progress-bar"
              percent={progressFunded}
              strokeLinecap="square"
              trailWidth="1"
              strokeWidth="1"
              trailColor="#e8e8e8"
              strokeColor="#0f7262" />
            <div className="p-show-funding p-show-info-item">
              ${numberWithCommas(project.funding)}
            </div>
            <p>pledged of ${numberWithCommas(project.funding_goal)} goal</p>
            <div className="p-show-info-item">{project.total_backers}</div>
            <p>{backerText}</p>
            <div className="p-show-info-item">
              {daysToGoNoString(project.deadline, project.funding, project.funding_goal)}
            </div>
            <p>{this.renderWishGrantedConditional()}</p>
            <Link className="backing-button" to={`/projects/${project.id}/backing`}>
              Back this wish
            </Link>
            <p className="backing-text">
              All or nothing. This wish will only be funded if it reaches its goal by {formatDeadline(project.deadline)}.
            </p>
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
              <RewardIndex project={project} />
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default ProjectShow;
