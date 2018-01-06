import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import CategoryShow from './category_show';
import { fetchProject } from '../../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  const category = state.entities.categories[ownProps.match.params.categoryId] || { project_ids: [] };
  debugger
  return {
    category: category,
    projects: category.project_ids.map( id => state.entities.projects[id])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: id => dispatch(fetchCategory(id)),
    fetchProject: id => dispatch(fetchProject(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
