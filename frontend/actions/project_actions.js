import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';
export const CLEAR_PROJECT_ERRORS = 'CLEAR_PROJECT_ERRORS';

export const receiveProjects = projects => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const removeProject = projectId => {
  return {
    type: REMOVE_PROJECT,
    projectId
  };
};

export const receiveProjectErrors = errors => {
  return {
    type: RECEIVE_PROJECT_ERRORS,
    errors
  };
};

export const clearProjectErrors = () => {
  return {
    type: CLEAR_PROJECT_ERRORS
  };
};

export const fetchProjects = () => {
  return dispatch => {
    return APIUtil.fetchProjects().then(projects => {
      return dispatch(receiveProjects(projects));
    });
  };
};

export const fetchProject = (id) => {
  return dispatch => {
    return APIUtil.fetchProject(id).then(project => {
      return dispatch(receiveProject(project));
    });
  };
};

export const createProject = (project) => {
  return dispatch => {
    return APIUtil.createProject(project).then(project => {
      return dispatch(receiveProject(project));
    }), err => {
      return dispatch(receiveProjectErrors(err.responseJSON));
    };
  };
};

export const updateProject = (project) => {
  return dispatch => {
    return APIUtil.updateProject(project).then(project => {
      return dispatch(receiveProject(project));
    }), err => {
      return dispatch(receiveProjectErrors(err.responseJSON));
    };
  };
};

export const deleteProject = (projectId) => {
  return dispatch => {
    return APIUtil.deleteProject(projectId).then((project) => {
      return dispatch(receiveProject(projectId));
    });
  };
};
