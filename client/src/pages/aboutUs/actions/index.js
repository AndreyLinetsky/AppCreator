
export const actionTypes = {
  UPDATE_FIELD: 'UPDATE_FIELD'
};
  
  export function updateField({ fieldName, fieldValue }) {
    return {
      type: actionTypes.UPDATE_FIELD,
      payload: {
        fieldName,
        fieldValue
      }
    };
  }
  