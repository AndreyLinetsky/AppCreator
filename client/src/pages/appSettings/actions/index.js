import { apiRequestActions } from '../../../utils/apiRequestActions';

export const actionTypes = {
  SET_APP_COLORS_FROM_IMAGE: apiRequestActions('SET_APP_COLORS_FROM_IMAGE')
};
  
  export function setAppColorsFromImage({ imagePath }) {
    return {
      type: actionTypes.SET_APP_COLORS_FROM_IMAGE.pending,
      payload: {
        imagePath
      }
    };
  }
  