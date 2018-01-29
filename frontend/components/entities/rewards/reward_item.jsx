import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatDeliveryDate } from '../../../util/time_util';

const RewardItem = ({ reward, projectId }) => {

  const backings = reward.backings.length === 1 ? <span>backer</span> : <span>backers</span>;

  return (
      <NavLink to={`/projects/${projectId}/backing`}>
        <li className="reward-item" >
          <div className="reward-content">
            <h4 className="reward-amout">Pledge ${reward.amount} or more</h4>
            <h4 className="reward-title">{reward.title}</h4>
            <p className="reward-description">{reward.description}</p>
            <div className="reward-date-cont">
              <h4 className="reward-date-title">Estimated delivery</h4>
              <h4 className="reward-date-content">{formatDeliveryDate(reward.delivery_date)}</h4>
            </div>
            <p className="reward-backings">{reward.backings.length} {backings}</p>
          </div>
          <p className="reward-hover-content">Select this reward</p>
        </li>
      </NavLink>
  );

};

export default RewardItem;
