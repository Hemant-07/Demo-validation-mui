import { DELETE_ITEM } from '../actions/ActionTypes';
export const addItem = item => {
    return {
      type: 'ADD_NEW_ITEM',
      payload: item,
    };
  };
  
  export const editItem = item => {
    return {
      type: 'EDIT_ITEM',
      payload: item,
    };
  };
  
  export const deleteItem = (updatedRows) => {
    return {
      type: 'DELITEM',
      payload: (updatedRows),
    };
  };

  