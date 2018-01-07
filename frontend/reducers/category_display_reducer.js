import {
  RECEIVE_CATEGORY
} from '../actions/category_actions';

const categoryDisplayReducer = (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.payload.category.id;
    default:
      return state;
  }
};

export default categoryDisplayReducer;
