import { actionTypes } from './actions';

export const initialState = {
  imageUrls: [],
  imageSearchKeyword: '',
  imagesDisplayErrorMessage: ''
};

function updateImageUrls(state, payload) {
  const { imageUrls } = payload;
  return {
    ...state,
    imageUrls,
    imagesDisplayErrorMessage: ''
  };
}

function updateImageSearchKeyword(state, payload) {
  const { imageSearchKeyword } = payload;
  return {
    ...state,
    imageSearchKeyword
  };
}

function updateDisplayImagesError(state, payload) {
  const { errorMessage } = payload;
  return {
    ...state,
    imageUrls: [],
    imagesDisplayErrorMessage: errorMessage
  };
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_IMAGES.success:
      return updateImageUrls(state, action.payload);
    case actionTypes.DISPLAY_IMAGES.error:
      return updateDisplayImagesError(state, action.payload);
    case actionTypes.UPDATE_IMAGE_SEARCH_KEYWORD:
      return updateImageSearchKeyword(state, action.payload);
    default:
      return state;
  }
};

export default imagesReducer;
