import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLoggedIn ,setLoggedOut } from './authSlice';

export const authApiSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ 
        baseUrl : 'http://localhost:3005/',
        credentials : 'include'
    }),

    endpoints : (builder) => ({

        getLogin : builder.mutation({
            query : (newPost) => ({
                url : '/api/login',
                method : "POST" ,
                body : newPost ,
            }),
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    const { data } = await queryFulfilled;
                    if (data.token) {
                        // Set logged in state
                        dispatch(setLoggedIn(data.token));
                    }
                } catch {
                    dispatch(setLoggedOut()); // Optionally handle failed login
                }
            },
        }),

        getRegister : builder.mutation({
            query : (newPost) => (
                {
                    url : '/api/register',
                    method : 'POST',
                    body : newPost,
                }
            )
        }),
    }),
});

export const {useGetLoginMutation , useGetRegisterMutation} = authApiSlice ;