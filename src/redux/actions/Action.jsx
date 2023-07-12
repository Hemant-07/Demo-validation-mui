import { DELETE_ITEM } from '../actions/ActionTypes';
export const addItem = item => {
    return {
      type: 'ADD_ITEM',
      payload: item,
    };
  };
  
  export const updateItem = item => {
    return {
      type: 'UPDATEITEM',
      payload: item,
    };
  };
  
  export const deleteItem = (updatedRows) => {
    return {
      type: 'DELITEM',
      payload: (updatedRows),
    };
  };

  