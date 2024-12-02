import { configureStore } from '@reduxjs/toolkit'
import { authApiSlice } from '../feature/authApiSlice';
import { userPostApi } from '../feature/userPostApi';
import authSlice from '../feature/authSlice'
import userLogSlice from "../feature/userLogSlice"

export const store = configureStore ({
	reducer : {
		[authApiSlice.reducerPath] : authApiSlice.reducer,
		[userPostApi.reducerPath] : userPostApi.reducer,
		auth : authSlice,
		user : userLogSlice
	},

	middleware : (getDefaultMiddleware)=>
		getDefaultMiddleware()
			.concat(authApiSlice.middleware)
			.concat(userPostApi.middleware),
});

export default store;