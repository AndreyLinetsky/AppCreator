import { fork } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import appSettingsSaga from './appSettingsSaga';

export default function* rootSaga() {
  yield fork(imagesSaga);
  yield fork(appSettingsSaga);
}
