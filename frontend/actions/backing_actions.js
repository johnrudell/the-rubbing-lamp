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

// export const createBacking = backings => {
//   return dispatch => {
//     return APIUtil.createBacking(backings).then(backing => {
//       return dispatch(receiveBacking(backing));
//     })
//   }
// }
//
// export const createBacking = (contributions) => dispatch => {
//   return (
//     APIUtil.createBacking(contributions)
//     .then( (contribution) => {
//       return dispatch(reciveBacking(contribution));
//       }
//
//     )
//   );
// }
