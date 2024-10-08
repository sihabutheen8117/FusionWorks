import { configureStore } from '@reduxjs/toolkit'
import {registerSlice} from '../feature/regsiterSlice'

export const store = configureStore ({
	reducer : {
		[registerSlice.reducerPath] : registerSlice.reducer,
	},

	middleware : (getDefaultMiddleware)=>
		getDefaultMiddleware().concat(registerSlice.middleware),
});

export default store;