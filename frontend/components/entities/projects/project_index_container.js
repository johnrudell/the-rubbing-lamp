import { connect } from 'react-redux';
import { fetchProjects } from '../../../actions/project_actions';
import { selectProjects } from '../../../reducers/selectors';
import ProjectIndex from './project_index';

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
)(ProjectIndex);
