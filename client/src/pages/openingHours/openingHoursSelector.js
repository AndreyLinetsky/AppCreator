import { createSelector } from 'reselect';

const appColorsSelector = state => state.appSettings.appColors;
export const getAppColorsSelector = createSelector(
  appColorsSelector,
  appColors => appColors
);

const openingHoursSelector = state => state.openingHours.openingHours;
export const getOpeningHoursSelector = createSelector(
  openingHoursSelector,
  openingHours => openingHours
);
