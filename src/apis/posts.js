import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../services";


export const getPost = createAsyncThunk( 
    'get-posts',
    async (id) => {
        return await axiosClient.get(`/posts?userId=${id}`)
})
export const getUser = createAsyncThunk( 
    'get-user',
    async (id) => {
        return (await axiosClient.get(`/users?id=${id}`))
})