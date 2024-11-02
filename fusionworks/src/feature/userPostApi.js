import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPostApi = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ 
        baseUrl : 'http://localhost:3005/',
        credentials : 'include'
    }),

    endpoints : (builder) => ({

        postProject : builder.mutation({
            query : (newPost) => ({
                url : '/api/project/post',
                method : "POST" ,
                body : newPost ,
            }),
        }),

        
    }),
});

export const {usePostProjectMutation } = userPostApi ;