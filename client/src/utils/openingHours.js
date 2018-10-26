export function getToSelectOptions(options, minOption) {
  if (!minOption.value) {
    return options;
  }

  const minOptionIndex = options.findIndex(t => t.value === minOption.value);
  return options.slice(minOptionIndex);
}

export function getFromSelectOptions(options, maxOption) {
  if (!maxOption.value) {
    return options;
  }

  const maxOptionIndex = options.findIndex(t => t.value === maxOption.value);
  return options.slice(0, maxOptionIndex + 1);
}

export function convertHourToDisplayString(hour) {
  return hour || hour === 0 ? `${hour}:00` : '';
}

function getOptionalLabel({ label }) {
  return label || '';
}

export function getOpeningHourDisplayString({
  fromHour,
  toHour,
  fromDay,
  toDay
}) {
  return {
    dayRange: `${getOptionalLabel(fromDay)} - ${getOptionalLabel(toDay)}`,
    hourRange: `${getOptionalLabel(fromHour)} - ${getOptionalLabel(toHour)}`
  };
}
