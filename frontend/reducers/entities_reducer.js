import { combineReducers } from 'redux';
import categories from './category_reducer';

const entitiesReducer = combineReducers({
  categories
});

export default entitiesReducer;
