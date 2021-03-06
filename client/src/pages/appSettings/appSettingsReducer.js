import { actionTypes } from './actions';
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_COLOR,
  APP_SETTINGS_UPLOAD_IMAGE_SUCCESS_MESSAGE,
  APP_SETTINGS_UPLOAD_IMAGE_IN_PROGRESS_MESSAGE
} from '../../consts/appSettings';

export const initialState = {
  appColors: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    color: DEFAULT_COLOR
  },
  appSettingsMessage: ''
};

function updateAppColors(state, payload) {
  const { appColors } = payload;
  return {
    ...state,
    appColors,
    appSettingsMessage: APP_SETTINGS_UPLOAD_IMAGE_SUCCESS_MESSAGE
  };
}

function updateAppSettingsErrorMessage(state, payload) {
  const { errorMessage } = payload
  return {
    ...state,
    appSettingsMessage: errorMessage
  };
}

function updateAppSettingsInProgressMessage(state) {
  return {
    ...state,
    appSettingsMessage: APP_SETTINGS_UPLOAD_IMAGE_IN_PROGRESS_MESSAGE
  };
}

const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.success:
      return updateAppColors(state, action.payload);
    case actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.error:
      return updateAppSettingsErrorMessage(state, action.payload);
    case actionTypes.UPDATE_APP_COLORS_FROM_IMAGE.pending:
      return updateAppSettingsInProgressMessage(state);
    default:
      return state;
  }
};

export default appSettingsReducer;
