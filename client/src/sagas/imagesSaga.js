import { put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../pages/images/actions';
import { PIXABUY_BASE_URL } from '../consts/url';
import { mapPixabuyResponseToImageUrls } from '../utils/mappers'

function* getImageUrlsByKeyword({ payload: { imageSearchKeyword } }) {
  try {
    const response = yield fetch(
        `${PIXABUY_BASE_URL}&q=${imageSearchKeyword}`
      ).then(res => res.json());  

    if (response.errorMessage) {
      throw new Error(response.errorMessage);
    }  
    
    const imageUrls = mapPixabuyResponseToImageUrls(response)
    yield put({
      type: actionTypes.DISPLAY_IMAGES.success,
      payload: { imageUrls }
    });
  } catch (e) {
    yield put({
      type: actionTypes.DISPLAY_IMAGES.error,
      payload: { errorMessage: e.message }
    });
  }
}

function* imagesSaga() {
  yield takeLatest(
    actionTypes.DISPLAY_IMAGES.pending,
    getImageUrlsByKeyword
  );
}

export default imagesSaga;
