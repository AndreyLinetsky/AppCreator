import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../pages/appSettings/actions';
import { SERVER_URL } from '../consts/url';

function* getAppColorsFromImage({ payload: { imagePath } }) {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify({ imagePath }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    const response = yield fetch(SERVER_URL, options).then(res => res.json());

    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    }

    const { colors: appColors } = response;
    
    yield put({
      type: actionTypes.SET_APP_COLORS_FROM_IMAGE.success,
      payload: { appColors }
    });
  } catch (e) {
    yield put({
      type: actionTypes.SET_APP_COLORS_FROM_IMAGE.error,
      payload: { errorMessage: e.message }
    });
  }
}

function* appSettingsSaga() {
  yield takeLatest(
    actionTypes.SET_APP_COLORS_FROM_IMAGE.pending,
    getAppColorsFromImage
  );
}

export default appSettingsSaga;
