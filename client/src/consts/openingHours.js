import { convertHourToDisplayString } from '../utils/openingHours';

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const DAY_OPTIONS = DAYS.map(day => {
  return {
    label: day,
    value: day
  };
});

const HOURS = Array.from(Array(24).keys());

export const HOUR_OPTIONS = HOURS.map(hour => {
  return {
    label: convertHourToDisplayString(hour),
    value: hour.toString()
  };
});
