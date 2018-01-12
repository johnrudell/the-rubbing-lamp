import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import { selectCategoryProjects } from '../../../reducers/selectors';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => {
  const categories = state.entities.categories;

  const category = categories[ownProps.match.params.categoryId] || categories[Object.keys(categories)[0]];

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
