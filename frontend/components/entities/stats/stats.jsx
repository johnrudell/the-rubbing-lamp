import React from 'react';
import { numberWithCommas } from '../../../util/project_util';

class Stats extends React.Component {

  componentDidMount() {
    this.props.fetchProjects();
  }

  renderDate() {
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const today = new Date();

    const day = today.getDate();
    const monthIndex = today.getMonth();
    const year = today.getFullYear();

    return monthNames[monthIndex] + ' ' + day + ', ' + year;
  }

  totalMoneyRaised() {
    let total = [];
    this.props.projects.forEach( project => {
      total.push(project.funding_raised);
    });
    let sum = total.reduce((a, b) => a + b, 0);
    return numberWithCommas(sum);
  }

  fundedProjects() {
    let count = 0;
    this.props.projects.forEach( project => {
      if (project.funding_raised > project.funding_goal) {
        count++;
      }
    });
    return count;
  }

  liveProjects() {
    return this.props.projects.length - this.fundedProjects();
  }

  render() {
    if (!this.props.projects) return null;



    return(
      <div className="stats-container">
        <div className="stat">
          <p className="s-top">{this.renderDate()}</p>
          <p className="s-bottom">Making wishes come true.</p>
        </div>
        <div className="stat">
          <p className="s-top">TOTAL FUNDING RAISED</p>
          <p className="s-bottom">${this.totalMoneyRaised()}</p>
        </div>
        <div className="stat">
          <p className="s-top">FUNDED WISHES</p>
          <p className="s-bottom">{this.fundedProjects()}</p>
        </div>
        <div className="stat">
          <p className="s-top">LIVE WISHES</p>
          <p className="s-bottom">{this.liveProjects()}</p>
        </div>
      </div>
    )
  }

}

export default Stats;
