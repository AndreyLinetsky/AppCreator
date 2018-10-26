import { createSelector } from 'reselect';

const appColorsSelector = state => state.appSettings.appColors;
export const getAppColorsSelector = createSelector(
  appColorsSelector,
  appColors => appColors
);

const appSettingsMessageSelector = state =>
  state.appSettings.appSettingsMessage;
export const getAppSettingsMessageSelector = createSelector(
  appSettingsMessageSelector,
  appSettingsMessage => appSettingsMessage
);
