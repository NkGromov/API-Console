import keyMirror from 'fbjs/lib/keyMirror';

export const ActionTypes = keyMirror({
  AUTHENTICATE: undefined,
  AUTHENTICATE_CHECK: undefined,
  AUTHENTICATE_SUCCESS: undefined,
  AUTHENTICATE_FAILURE: undefined,
  AUTHENTICATE_ERROR: undefined,
  LOGOUT: undefined,
  LOGOUT_SUCCESS: undefined,
  LOGOUT_FAILURE: undefined,
  IS_FETCHING: undefined,
});
