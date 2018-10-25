export const ROUTE_PATHS = {
  DEFAULT: '/',
  ABOUT_US: '/AboutUs',
  IMAGES: '/Images',
  OPENING_HOURS: '/OpeningHours',
  APP_SETTINGS: '/AppSettings'
};

const { ABOUT_US, APP_SETTINGS, IMAGES, OPENING_HOURS} = ROUTE_PATHS

export const MENU_OPTIONS = [
  {
    text: 'About Us',
    to: ABOUT_US,
    color: 'orange'
  },
  {
    text: 'Images',
    to: IMAGES,
    color: 'blue'
  },
  {
    text: 'Opening Hours',
    to: OPENING_HOURS,
    color: 'green'
  },
  {
    text: 'App Settings',
    to: APP_SETTINGS,
    color: 'red'
  }
];
