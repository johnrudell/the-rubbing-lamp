import { combineReducers } from 'redux';
import categories from './categories_reducer';
import projects from './projects_reducer';
import project from './project_show_reducer';

const entitiesReducer = combineReducers({
  categories,
  projects,
  project
});

export default entitiesReducer;
