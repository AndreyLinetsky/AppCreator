import { actionTypes } from './actions';

export const initialState = {
  imageUrls: [],
  imageSearchKeyword: '',
  imagesDisplayErrorMessage: ''
};

function setImageUrls(state, payload) {
  const { imageUrls } = payload;
  return {
    ...state,
    imageUrls,
    imagesDisplayErrorMessage: ''
  };
}

function setImageSearchKeyword(state, payload) {
  const { imageSearchKeyword } = payload;
  return {
    ...state,
    imageSearchKeyword
  };
}

function setDisplayImagesError(state, payload) {
  return {
    ...state,
    imageUrls: [],
    imagesDisplayErrorMessage: payload.errorMessage
  };
}

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISPLAY_IMAGES.success:
      return setImageUrls(state, action.payload);
    case actionTypes.DISPLAY_IMAGES.error:
      return setDisplayImagesError(state, action.payload);
    case actionTypes.UPDATE_IMAGE_SEARCH_KEYWORD:
      return setImageSearchKeyword(state, action.payload);
    default:
      return state;
  }
};

export default imagesReducer;
