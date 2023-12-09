import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../services";

export const getUsers = createAsyncThunk(
    'get-users',
    async () => {
        return await axiosClient.get('/users')
    }
)