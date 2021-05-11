import {createActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const {authenticate, authenticateError, authenticateCheck, authenticateSuccess,  authenticateFailure, logout, isFetching} = createActions({
  [ActionTypes.AUTHENTICATE]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_ERROR]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_CHECK]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_SUCCESS]: (payload) => payload,
  [ActionTypes.AUTHENTICATE_FAILURE]: (payload) => payload,
  [ActionTypes.LOGOUT]: (payload) => payload,
  [ActionTypes.IS_FETCHING]: (payload) => payload,
});
