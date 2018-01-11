import { connect } from 'react-redux';
import {
  createProject,
  fetchProject,
  updateProject,
  clearProjectErrors,
} from '../../../actions/project_actions';
import { fetchCategories } from '../../../actions/category_actions';
import ProjectForm from './project_form';
import { selectCategories } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let project;
  let formType = "new";
  if (ownProps.match.path.includes('edit')) {
    project = state.entities.projects[ownProps.match.params.projectId];
    formType = "edit";
  }

  return {
    currentUser: state.session.currentUser,
    errors: state.errors.project,
    project,
    formType,
    categories: selectCategories(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project)),
    fetchProject: id => dispatch(fetchProject(id)),
    updateProject: project => dispatch(updateProject(project)),
    clearProjectErrors: () => dispatch(clearProjectErrors()),
    fetchCategories: () => dispatch(fetchCategories()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
