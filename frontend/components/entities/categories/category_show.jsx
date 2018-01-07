import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';
import { percentFundedFunction, daysToGo } from '../../../util/project_util';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.categoryId !== nextProps.match.params.categoryId) {
      this.props.fetchCategory(nextProps.match.params.categoryId);
    }
  }

  render() {
    const { category, projects } = this.props;

    if (!category) return null;

    // Refractor into a util file later
    const byDate = projects.slice(0);
    byDate.sort(function(a, b) {
      let aDate = new Date(a.created_at)
      let bDate = new Date(b.created_at)
      return bDate - aDate;
    });

    const recentProject = byDate[Object.keys(byDate)[0]];



    if (!recentProject) {
      return <div>There are no projects for this category yet.</div>;
    } else {

      const percentFunded = percentFundedFunction(recentProject.funding_raised, recentProject.funding_goal);

      const featuredProject = (
        <div className="featured-project">
          <img className="featured-img" src={recentProject.img_url} />
          <div className="featured-info-container">
            <div className="featured-title">{recentProject.title}</div>
            <div className="featured-author">by {recentProject.author.username}</div>
            <div className="featured-percent">{percentFunded}% funded</div>
          </div>
        </div>
      );

      const projectPreview = projects.map((project, idx) => {
        if (project.id !== recentProject.id) {
          return (
            <ProjectIndexItem key={project.id} project={project} />
          );
        }
      });

      return (
        <div className="main-category-projects">
          <div className="featured-project-container">
            <h2 className="featured-header">Featured Project</h2>
            {featuredProject}
          </div>
          <ul className="project-index-list">
            <h2 className="featured-header">{category.name}</h2>
            {projectPreview}
          </ul>
        </div>
      );

    }

  }
}

export default CategoryShow;
