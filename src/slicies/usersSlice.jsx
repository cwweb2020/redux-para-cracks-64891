import { createSlice } from '@reduxjs/toolkit'
import { getUsers } from '../apis/users';

const initialState = {
    error:null,
    loading:false,
    columns:[],
    rows:[]
}

const usersSlice = createSlice({
  name: '@users',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder.addCase(getUsers.pending,(state) => {
        state.loading = true
    })
    builder.addCase(getUsers.fulfilled,(state,action) => {
        const columnas = action.payload?.data[0];
        const filas = action.payload?.data;
        state.columns = Object.keys(columnas).filter((campo) => campo !== "address" && campo !== "company")
        state.rows = filas.map(({id,name,username,email,phone,website}) => {
            return {id,name,username,email,phone,website}
        })
        state.loading = false
    })
    builder.addCase(getUsers.rejected,(state,action) => {
        console.log(action.payload)
        state.columns = [];
        state.rows = [];
        state.loading = false;
        state.error = true;
    })
  }
});

// export const {} = usersSlice.actions

export default usersSlice.reducer