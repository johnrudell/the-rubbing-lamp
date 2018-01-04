import { connect } from 'react-redux';
import { fetchCategory } from '../../../actions/category_actions';
import CategoryShow from './category_show';

const mapStateToProps = state => {
  return {
    category: state.entities.category,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: id => dispatch(fetchCategory(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
