import { connect } from 'react-redux';
import { fetchCategories } from '../../../actions/category_actions';
import { selectCategories } from '../../../reducers/selectors';
import CategoryIndex from './category_index';

const mapStateToProps = state => {
  return {
    categories: selectCategories(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex);
