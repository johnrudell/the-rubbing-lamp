import merge from 'lodash/merge';
import {
  RECEIVE_PROJECTS,
  RECEIVE_PROJECT,
  REMOVE_PROJECT
} from '../actions/project_actions';
import { RECEIVE_CATEGORY } from '../actions/category_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return action.projects;
    case RECEIVE_PROJECT:
      return merge({}, state, { [action.project.id]: action.project });
    case REMOVE_PROJECT:
      let newState = merge({}, state);
      delete newState[action.project.id];
      return newState;
    case RECEIVE_CATEGORY:
      const projects = action.payload.projects.reduce((acc, project) => {
        acc[project.id] = project;
        return acc;
      }, {});
      return merge({}, state, projects);
    default:
      return state;
  }
};

export default projectsReducer;
