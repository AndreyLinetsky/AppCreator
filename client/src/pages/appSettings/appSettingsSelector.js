import { createSelector } from 'reselect';

const appColorsSelector = state => state.appSettings.appColors;
export const getAppColorsSelector = createSelector(appColorsSelector, appColors => appColors);