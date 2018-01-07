import { combineReducers } from 'redux';
import merge from 'lodash/merge';

import errors from './errors_reducer';
import categoryDisplay from './category_display_reducer';

export default combineReducers({
  errors,
  categoryDisplay
});
