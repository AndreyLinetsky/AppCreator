import { actionTypes } from './actions';

let currentId = 0;

const initialOpeningHour = {
  fromDay: '',
  toDay: '',
  fromHour: '',
  toHour: ''
}

export const initialState = {
  openingHours: []
};

function addOpeningHour(state) {
  return {
    ...state,
    openingHours: [
      ...state.openingHours,
      {...initialOpeningHour, id: currentId++}
    ]
  };
}

function updateOpeningHour(state, payload) {
    const { id, fieldName, fieldValue } = payload;
    return {
      ...state,
      openingHours: state.openingHours.map(item => item.id === id ? {...item, [fieldName]: fieldValue} : item )
    };
  }

const openingHoursReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OPENING_HOUR:
      return addOpeningHour(state);
      case actionTypes.UPDATE_OPENING_HOUR:
      return updateOpeningHour(state, action.payload);
    default:
      return state;
  }
};

export default openingHoursReducer;
