import { actionTypes } from './actions';

const initialOpeningHourTimeFrame = {
  dayFrom: '',
  dayTo: '',
  hourFrom: '',
  hourTo: ''
}

export const initialState = {
  openingHours: []
};

function addOpeningHours(state, payload) {
  const { fieldName, fieldValue } = payload;
  return {
    ...state,
    [fieldName]: fieldValue
  };
}

function updateOpeningHours(state, payload) {
    const { fieldName, fieldValue } = payload;
    return {
      ...state,
      [fieldName]: fieldValue
    };
  }

const aboutUsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return updateField(state, action.payload);
    default:
      return state;
  }
};

export default aboutUsReducer;
