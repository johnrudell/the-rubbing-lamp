import { connect } from 'react-redux';
import { fetchProject } from '../../../actions/project_actions';
import ProjectShow from './project_show';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchProject: id => dispatch(fetchProject(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);
