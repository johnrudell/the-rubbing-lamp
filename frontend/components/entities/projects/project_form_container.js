import { connect } from 'react-redux';
import { createProject, clearProjectErrors } from '../../../actions/project_actions';
import ProjectForm from './project_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.project
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
