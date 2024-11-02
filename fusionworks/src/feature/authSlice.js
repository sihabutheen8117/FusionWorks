import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authSlice = createApi({
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
            })
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

export const {useGetLoginMutation , useGetRegisterMutation} = authSlice ;