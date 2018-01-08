import React from 'react';
import { percentFundedFunction } from '../../../util/project_util';

class CategoryShowItem extends React.Component {

  render() {
    const { project } = this.props;
    const percentFunded = percentFundedFunction(project.funding_raised, project.funding_goal);

    return (
      <li className="preview-project">
        <img className="preview-img" src={project.img_url} />
        <div className="preview-info-container">
          <div className="preview-title color-green-hover">{project.title}</div>
          <div className="preview-percent">{percentFunded}% funded</div>
        </div>
      </li>
    );
  }

}

export default CategoryShowItem;
