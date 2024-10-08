import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const registerSlice = createApi({
    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ baseUrl : 'http://localhost:3005/'}),

    endpoints : (builder) => ({
        addPosts : builder.mutation({
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

export const {useAddPostsMutation} = registerSlice ;