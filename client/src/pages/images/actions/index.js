import { apiRequestActions } from '../../../utils/apiRequestActions';

export const actionTypes = {
  DISPLAY_IMAGES: apiRequestActions('DISPLAY_IMAGES'),
  UPDATE_IMAGE_SEARCH_KEYWORD: 'UPDATE_IMAGE_SEARCH_KEYWORD'
};

export function displayImages({ imageSearchKeyword }) {
  return {
    type: actionTypes.DISPLAY_IMAGES.pending,
    payload: {
      imageSearchKeyword
    }
  };
}

export function updateImageSearchKeyword({ imageSearchKeyword }) {
  return {
    type: actionTypes.UPDATE_IMAGE_SEARCH_KEYWORD,
    payload: {
      imageSearchKeyword
    }
  };
}
