import { combineReducers } from 'redux';
import categories from './categories_reducer';
import projects from './projects_reducer';

const entitiesReducer = combineReducers({
  categories,
  projects
});

export default entitiesReducer;
