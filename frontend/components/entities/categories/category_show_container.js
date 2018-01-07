import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import { selectCategoryProjects } from '../../../reducers/selectors';
import CategoryShow from './category_show';

const mapStateToProps = state => {
  // debugger
  // const category = state.entities.categories[ownProps.match.params.categoryId] || { project_ids: [] };
  const category = state.entities.categories[state.ui.categoryDisplay];

  return {
    category,
    projects: selectCategoryProjects(state, category)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: id => dispatch(fetchCategory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
