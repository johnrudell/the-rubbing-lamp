import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const receiveCategory = category => {
  return {
    type: RECEIVE_CATEGORY,
    category
  };
};

export const fetchCategories = () => {
  return dispatch => {
    return APIUtil.fetchCategories().then(categories => {
      return dispatch(receiveCategories(categories));
    });
  };
};

export const fetchCategory = () => {
  return dispatch => {
    return APIUtil.fetchCategory().then(category => {
      return dispatch(receivecategory(category));
    });
  };
};
