import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userPostApi = createApi({
    reducerPath : 'postApi',
    baseQuery : fetchBaseQuery({ 
        baseUrl :process.env.REACT_APP_API_URL,
        credentials : 'include',
    }),

    tagTypes: ['Posts' , 'Messages' , 'Events' , 'Clubs'],
    endpoints : (builder) => ({

        postProject : builder.mutation({
            query : (newPost) => ({
                url : '/api/project/post',
                method : "POST" ,
                body : newPost ,
            }),
            invalidatesTags: ['Posts'],
        }),

        getProjects  :builder.query({
            query : () => '/api/projects',
            providesTags: ['Posts'],
        }),

        postEvents : builder.mutation({
            query : (newPost) => ({
                url : `/api/events/post/`,
                method : "POST" ,
                body : newPost ,
            }),
            invalidatesTags: ['Events'],
        }),

        getEvents : builder.query({
            query : () => '/api/events',
            providesTags : ['Events'],
        }),

        postMessage : builder.mutation({
            query : (newPost) => ({
                url : `/api/discussionForum/Message/${ newPost.id ? newPost.id : "" }`,
                method : "POST" ,
                body : newPost ,
            }),
            invalidatesTags: ['Messages'],
        }),

        getMessage : builder.query({
            query : () => '/api/discussionForum',
            providesTags: ['Messages'],
        }),

        postApply : builder.mutation({
            query : (newPost) => ({
                url : `/api/projects/update/`,
                method : "POST",
                body : newPost ,
            }),
            invalidatesTags: ['Posts'],
        }),

        getClubs : builder.query({
            query : () => '/api/clubs',
            providesTags: ['Clubs'],
        }),

        getUserDetails : builder.query({
            query : () => '/api/getMyDetails',
        }),

        postClubs : builder.mutation({
            query : (newPost) => ({
                url : `/api/register/update`,
                method : "POST" ,
                body : newPost ,
            }),
            invalidatesTags: ['Clubs'],
        }),

        deleteProject : builder.mutation({
            query : (newPost) => ({
                url : `/api/projects/delete/`,
                method : "POST" ,
                body : newPost ,
            }),
            invalidatesTags: ['Posts'],
        }),

        
        
    }),
});


export const {usePostProjectMutation
     ,useGetProjectsQuery
     ,usePostEventsMutation
      , useGetEventsQuery
       ,usePostMessageMutation
        ,useGetMessageQuery
        ,usePostApplyMutation
        ,useGetClubsQuery
        ,useGetUserDetailsQuery
        ,usePostClubsMutation
        ,useDeleteProjectMutation
     } = userPostApi ;