import * as APIUtil from '../util/backing_util';

export const RECEIVE_BACKING = 'RECEIVE_BACKING';

export const receiveBacking = backing => {
  return {
    type: RECEIVE_BACKING,
    backing
  };
};

export const createBacking = backing => {
  return dispatch => {
    return APIUtil.createBacking(backing).then(backing => {
      return dispatch(receiveBacking(backing));
    })
  }
}
