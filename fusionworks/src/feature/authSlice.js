import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload; // Optionally store the token if needed
        },
        setLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.token = null;
        },
    },
});

export const { setLoggedIn, setLoggedOut } = authSlice.actions;
export default authSlice.reducer;
