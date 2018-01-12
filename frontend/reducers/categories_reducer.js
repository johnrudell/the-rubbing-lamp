import merge from 'lodash/merge';
import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/category_actions';

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;
    case RECEIVE_CATEGORY:
    // const newCategory = {[action.category.id]: action.category};
    // return merge({}, state, newCategory);
      const category = action.payload.category;
      category.project_ids = action.payload.projects.map(project => project.id);

      return merge({}, state, { [category.id]: category });
    default:
      return state;
  }
};

export default categoryReducer;
