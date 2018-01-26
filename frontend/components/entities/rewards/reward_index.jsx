import React from 'react';
import RewardItem from './reward_item';

const RewardIndex = ({ project }) => {
  const rewards = project.rewards.map(reward => {
    return <RewardItem key={reward.id} reward={reward} projectId={project.id} />;
  });

  return (
    <div>
      {rewards}
    </div>
  );
};

export default RewardIndex;
