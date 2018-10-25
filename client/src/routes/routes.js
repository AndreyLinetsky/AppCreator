import AboutUs from '../pages/aboutUs/';
import Images from '../pages/images/';
import OpeningHours from '../pages/openingHours/';
import AppSettings from '../pages/appSettings';
import { ROUTE_PATHS } from '../consts/routes';

const { OPENING_HOURS, IMAGES, DEFAULT, APP_SETTINGS, ABOUT_US } = ROUTE_PATHS;
const defaultComponent = AboutUs;

export const routes = [
  {
    component: defaultComponent,
    path: DEFAULT
  },
  {
    component: AboutUs,
    path: ABOUT_US
  },
  {
    component: Images,
    path: IMAGES
  },
  {
    component: OpeningHours,
    path: OPENING_HOURS
  },
  {
    component: AppSettings,
    path: APP_SETTINGS
  }
];
