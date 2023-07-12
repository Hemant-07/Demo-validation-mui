import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../reducer/Reducers'

export default configureStore({
	reducer: inventoryReducer,
});