import { combineReducers } from 'redux';
import categories from './categories_reducer';
import projects from './projects_reducer';
import backings from './backings_reducer';

const entitiesReducer = combineReducers({
  categories,
  projects,
  backings
});

export default entitiesReducer;
