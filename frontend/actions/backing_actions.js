import * as APIUtil from '../util/backing_util';

export const RECEIVE_BACKING = 'RECEIVE_BACKING';

export const receiveBacking = backing => {
  return {
    type: RECEIVE_BACKING,
    backing
  };
};

export const createBacking = backings => {
  return dispatch => {
    return APIUtil.createBacking(backings).then(backing => {
      return dispatch(receiveBacking(backing));
    })
  }
}
