import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import { selectCategoryProjects } from '../../../reducers/selectors';
import CategoryShowAll from './category_show_all';

const mapStateToProps = (state, ownProps) => {
  // debugger
  // const category = state.entities.categories[ownProps.match.params.categoryId] || { project_ids: [] };
  const category = state.entities.categories[ownProps.match.params.categoryId] || state.entities.categories[1];

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
)(CategoryShowAll);
