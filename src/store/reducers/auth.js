import {handleActions} from 'redux-actions';

import {ActionTypes} from 'src/store/constants';

export const initialState = {
  loading: false,
  sessionKey: null,
  login: null,
  sublogin: null,
  error: null,
  isFetching: false
};

export default {
  auth: handleActions(
    {
      [ActionTypes.AUTHENTICATE]: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      [ActionTypes.AUTHENTICATE_SUCCESS]: (state, {payload}) => {
        return {
          ...state,
          loading: false,
          sessionKey: payload.sessionKey,
          login: payload.login,
          sublogin: payload.sublogin,
        };
      },
      [ActionTypes.AUTHENTICATE_FAILURE]: (state) => {
        return {
          ...state,
          sessionKey: null,
          login: null,
          sublogin: null,
        };
      },
      [ActionTypes.AUTHENTICATE_ERROR]: (state, {payload}) => {
        return {
          ...state,
          error: JSON.stringify(payload)
        };
      },
      [ActionTypes.LOGOUT]: (state) => {
        return {
          ...state,
          loading: false,
          sessionKey: null,
        };
      },
      [ActionTypes.IS_FETCHING]: (state, {payload}) => {
        return {
          ...state,
         isFetching: payload
        };
      },
    },
    initialState
  ),
};
