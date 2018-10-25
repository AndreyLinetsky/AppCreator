import { actionTypes } from './actions';
import {
  DEFAULT_BACKGROUND_COLOR,
  DEFAULT_COLOR
} from '../../consts/defaultAppSettings';

export const initialState = {
  appColors: {
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
    color: DEFAULT_COLOR,
  } , 
  appSettingsErrorMessage: ''
};

function setAppColors(state, payload) {
  const {
    appColors
  } = payload;
  return {
    ...state,
    appColors,
    submitCommentErrorMessage: ''
  };
}

function setAppSettingsErrorMessage(state, payload) {
  return {
    ...state,
    appSettingsErrorMessage: payload.errorMessage
  };
}

const appSettingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_APP_COLORS_FROM_IMAGE.success:
      return setAppColors(state, action.payload);
    case actionTypes.SET_APP_COLORS_FROM_IMAGE.error:
      return setAppSettingsErrorMessage(state, action.payload);
    default:
      return state;
  }
};

export default appSettingsReducer;
