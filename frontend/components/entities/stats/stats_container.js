import { connect } from 'react-redux';
import { fetchProjects } from '../../../actions/project_actions';
import { selectProjects } from '../../../reducers/selectors';
import Stats from './stats';

const mapStateToProps = state => {
  return {
    projects: selectProjects(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProjects: () => dispatch(fetchProjects())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
