import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../pages/appSettings/actions';
import { UPLOAD_IMAGE_URL } from '../consts/url';
import { blobToDataURL } from '../utils/apiHelper';
import { mapColorsServerResponseToAppColors } from '../utils/mappers';

function* getAppColorsFromImage({ payload: { fileBlob } }) {
  try {
    const dataUrl = yield blobToDataURL(fileBlob);
    const options = {
      method: 'POST',
      body: JSON.stringify({ image: dataUrl }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    };

    const response = yield fetch(UPLOAD_IMAGE_URL, options).then(res =>
      res.json()
    );

    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    }

    const { colors } = response;

    yield put({
      type: actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.success,
      payload: { appColors: mapColorsServerResponseToAppColors(colors) }
    });
  } catch (e) {
    yield put({
      type: actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.error,
      payload: { errorMessage: e.message }
    });
  }
}

function* appSettingsSaga() {
  yield takeLatest(
    actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.pending,
    getAppColorsFromImage
  );
}

export default appSettingsSaga;
