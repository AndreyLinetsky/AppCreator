import { actionTypes } from '../aboutUs/actions';

export const initialState = {
  name: '',
  description: '',
  url: ''
};

function updateField(state, payload) {
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
