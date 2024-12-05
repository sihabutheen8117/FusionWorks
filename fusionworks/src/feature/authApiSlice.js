import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setLoggedIn ,setLoggedOut } from './authSlice';
import { storeUserLog } from './userLogSlice';

export const authApiSlice = createApi({
    reducerPath : 'authApi',
    baseQuery : fetchBaseQuery({ 
        baseUrl : process.env.API_URL,
        credentials : 'include'
    }),

    endpoints : (builder) => ({

        getLogin : builder.mutation({
            query : (newPost) => ({
                url : '/api/login',
                method : "POST" ,
                body : newPost ,
            }),

            async onQueryStarted(arg , { dispatch , queryFulfilled }){
                console.log("onquery triggered !!!")
                try {
                    const {data} = await queryFulfilled ;
                    console.log("authApiSlice : " + data)
                    dispatch(storeUserLog(data))
                }
                catch(err) {
                    console.log("Error from authSliceApi : " ,err)
                }
            }
            
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