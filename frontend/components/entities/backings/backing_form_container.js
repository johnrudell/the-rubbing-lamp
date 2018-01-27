import { connect } from 'react-redux';
import { createBacking } from '../../../actions/backing_actions';
import { fetchProject } from '../../../actions/project_actions';
import BackingForm from './backing_form.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createBacking: backing => dispatch(createBacking(backing)),
    fetchProject: id => dispatch(fetchProject(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackingForm);
