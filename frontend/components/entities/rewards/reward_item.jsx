import React from 'react';
import { NavLink } from 'react-router-dom';

const RewardItem = ({ reward, projectId }) => {

  const backings = reward.backings.length === 1 ? <span>backer</span> : <span>backers</span>;

  return (
      <NavLink to={`projects/${projectId}/backing`}>
        <li className="reward-item" >
          <div className="reward-content">
            <h4 className="reward-amout">Pledge ${reward.amount} or more</h4>
            <h4 className="reward-title">{reward.title}</h4>
            <p className="reward-description">{reward.description}</p>
            <p className="reward-backings">{reward.backings.length} {backings}</p>
          </div>
          <p className="reward-hover-content">Select this reward</p>
        </li>
      </NavLink>
  );

};

export default RewardItem;
