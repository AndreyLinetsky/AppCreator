export function getToSelectOptions(options, minOption) {
    if (!minOption) {
      return options;
    }
  
    const minOptionIndex = options.findIndex(t => t.value === minOption);
    return options.slice(minOptionIndex);
  }
  
  export function getFromSelectOptions(options, maxOption) {
    if (!maxOption) {
      return options;
    }
  
    const maxOptionIndex =  options.findIndex(t => t.value === maxOption);
    return options.slice(0, maxOptionIndex + 1);
  }
  
  export function convertHourToDisplayString(hour){
      return hour ? `${hour}:00` : ''
  }