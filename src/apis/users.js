import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
    'get-users',
    async () => {
        return await axios.get('https://jsonplaceholder.typicode.com/users')
    }
)