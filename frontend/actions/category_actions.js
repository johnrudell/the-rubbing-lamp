import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = payload => {
  return {
    type: RECEIVE_CATEGORY,
    payload
  };
};

export const fetchCategories = () => {
  return dispatch => {
    return APIUtil.fetchCategories().then(categories => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const fetchCategory = (id) => {
  return dispatch => {
    return APIUtil.fetchCategory(id).then(category => {
      return dispatch(receiveCategory(category));
    });
  };
};
