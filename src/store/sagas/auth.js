import {all, put, call, takeLatest} from 'redux-saga/effects';
import api from 'src/helpers/sendsay';

import {ActionTypes} from 'src/store/constants';
import {authenticateSuccess, authenticateFailure, authenticateError,isFetching} from 'src/store/actions/auth';

export function* authenticateCheckSaga() {
  yield put(isFetching(true))
  try {
    yield api.sendsay.request({
      action: 'pong',
    });
  } catch (error) {
    if (error.id === 'error/auth/failed') {
      yield call(logoutSaga);
    }
  }
  yield put(isFetching(false))
}

export function* authenticateSaga({payload}) {
  yield put(isFetching(true))
  let error = null
  yield api.sendsay
    .login({
      login: payload.login,
      sublogin: payload.sublogin,
      password: payload.password,
    })
    .then(() => {
      document.cookie = `sendsay_session=${api.sendsay.session}`;
    })
    .catch((err) => {
      document.cookie = '';
      error = err
      console.log('err', err);
    });

  if(error) yield put(authenticateError({id: error.id, explain: error.explain}));
  else yield put(
    authenticateSuccess({
      sessionKey: api.sendsay.session,
      login: payload.login,
      sublogin: payload.sublogin,
    })
  );
  yield put(isFetching(false))
}

export function* logoutSaga() {
  yield put(isFetching(true))
  yield put(authenticateFailure());
  document.cookie = '';
  yield put(isFetching(false))
}

export default function* root() {
  yield all([
    takeLatest(ActionTypes.AUTHENTICATE, authenticateSaga),
    takeLatest(ActionTypes.AUTHENTICATE_CHECK, authenticateCheckSaga),
    takeLatest(ActionTypes.LOGOUT, logoutSaga),
  ]);
}
