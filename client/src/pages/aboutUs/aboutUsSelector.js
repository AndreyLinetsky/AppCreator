import { createSelector } from 'reselect';

const nameSelector = state => state.aboutUs.name;
export const getNameSelector = createSelector(nameSelector, name => name);

const descriptionSelector = state => state.aboutUs.description;
export const getDescriptionSelector = createSelector(
  descriptionSelector,
  description => description
);

const urlSelector = state => state.aboutUs.url;
export const getUrlSelector = createSelector(urlSelector, url => url);

const appColorsSelector = state => state.appSettings.appColors;
export const getAppColorsSelector = createSelector(appColorsSelector, appColors => appColors);