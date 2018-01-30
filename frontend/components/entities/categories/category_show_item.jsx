import React from 'react';
import { percentFundedFunction } from '../../../util/project_util';
import { Link } from 'react-router-dom';

class CategoryShowItem extends React.Component {

  render() {
    const { project } = this.props;
    const percentFunded = percentFundedFunction(project.funding, project.funding_goal);

    return (
      <li className="preview-project">
        <Link to={`/projects/${project.id}`}>
          <img className="preview-img" src={project.imageUrl} />
        </Link>
        <div className="preview-info-container">
          <Link className="preview-title color-green-hover" to={`/projects/${project.id}`}>
            {project.title}
          </Link>
          <div className="preview-percent">{percentFunded}% funded</div>
        </div>
      </li>
    );
  }

}

export default CategoryShowItem;
