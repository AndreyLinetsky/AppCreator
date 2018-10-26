import AboutUs from '../pages/aboutUs';
import Images from '../pages/images';
import OpeningHours from '../pages/openingHours';
import AppSettings from '../pages/appSettings';
import { ROUTE_PATHS } from '../consts/routes';

const { ABOUT_US, APP_SETTINGS, IMAGES, OPENING_HOURS, DEFAULT } = ROUTE_PATHS;

const defaultComponent = AboutUs;

export const routes = [
  {
    component: defaultComponent,
    path: DEFAULT,
    exact: true
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
