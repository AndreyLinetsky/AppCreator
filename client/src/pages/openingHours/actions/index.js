export const actionTypes = {
  ADD_OPENING_HOUR: 'ADD_OPENING_HOUR',
  UPDATE_OPENING_HOUR: 'UPDATE_OPENING_HOUR'
};

export function updateOpeningHour({ id, fieldName, fieldValue }) {
  return {
    type: actionTypes.UPDATE_OPENING_HOUR,
    payload: {
      id,
      fieldName,
      fieldValue
    }
  };
}

export function addOpeningHour() {
  return {
    type: actionTypes.ADD_OPENING_HOUR
  };
}
