import { apiRequestActions } from '../../../utils/apiRequestActions';

export const actionTypes = {
  UPDATE_APP_COLORS_FROM_IMAGE: apiRequestActions('UPDATE_APP_COLORS_FROM_IMAGE')
};

export function updateAppColorsFromImage({ fileBlob }) {
  return {
    type: actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.pending,
    payload: {
      fileBlob
    }
  };
}
