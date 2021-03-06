import React from 'react';
import ProjectIndexItem from '../projects/project_index_item';
import { percentFundedFunction } from '../../../util/project_util';
import CategoryShowItem from './category_show_item';
import { Link } from 'react-router-dom';

class CategoryShow extends React.Component {
  componentDidMount() {
    if (!this.props.match.params.categoryId) {
      return null;
    } else {

      this.props.fetchCategory(this.props.match.params.categoryId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.categoryId !== nextProps.match.params.categoryId) {
      if (!this.props.match.params.categoryId) {
        return null;
      } else {
        this.props.fetchCategory(nextProps.match.params.categoryId);
      }
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
      return <div className="empty-category-projects">There are no projects for this category yet.</div>;
    } else {
      // if (recentProject.funding === null) recentProject.funding = recentProject.funding_raised;

      const percentFunded = percentFundedFunction(recentProject.funding, recentProject.funding_goal);

      const featuredProject = (
        <Link className="featured-project" to={`/projects/${recentProject.id}`}>
          <img className="featured-img" src={recentProject.imageUrl} />
          <div className="featured-info-container">
            <div className="featured-title">{recentProject.title}</div>
            <div className="featured-author">by {recentProject.author.username}</div>
            <div className="featured-percent">{percentFunded}% funded</div>
          </div>
        </Link>
      );

      const projectPreview = projects.map(project => {
        if (!project || !recentProject) {
          return null;
        } else {
          if (project.id !== recentProject.id) {
            return <CategoryShowItem key={project.id} project={project} />;
          }
        }
      });

      return (
        <div className="main-category-projects">
          <div className="featured-project-container">
            <h2 className="featured-header">Featured Project</h2>
            {featuredProject}
          </div>
          <ul className="preview-project-list">
            <h2 className="featured-header">{category.name}</h2>
            {projectPreview}
            <div className="view-all-button">
              <Link className="decolor-link" to={`/categories/${category.id}/all`}>
                View All
              </Link>
            </div>

          </ul>
        </div>
      );

    }

  }
}

export default CategoryShow;
