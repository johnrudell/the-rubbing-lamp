import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import { selectCategoryProjects } from '../../../reducers/selectors';
import CategoryShowAll from './category_show_all';

const mapStateToProps = (state, ownProps) => {
  
  const category = state.entities.categories[ownProps.match.params.categoryId];

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
