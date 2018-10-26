import { createSelector } from 'reselect';

const imageUrlsSelector = state => state.images.imageUrls;
export const getImageUrlsSelector = createSelector(
  imageUrlsSelector,
  imageUrls => imageUrls
);

const imageSearchKeywordSelector = state => state.images.imageSearchKeyword;
export const getImageSearchKeywordSelector = createSelector(
  imageSearchKeywordSelector,
  imageSearchKeyword => imageSearchKeyword
);

const imagesDisplayErrorMessageSelector = state =>
  state.images.imagesDisplayErrorMessage;
export const getImagesDisplayErrorMessageSelector = createSelector(
  imagesDisplayErrorMessageSelector,
  imagesDisplayErrorMessage => imagesDisplayErrorMessage
);

const appColorsSelector = state => state.appSettings.appColors;
export const getAppColorsSelector = createSelector(
  appColorsSelector,
  appColors => appColors
);
