import { createSlice } from "@reduxjs/toolkit";
import { getPost, getUser } from "../apis/posts";

const initialState = {
  loading: true,
  user_posts: [],
  user: null,
};

const postsSlice = createSlice({
  name: "@posts",
  initialState,
  reducers: {},

  extraReducers: (build) => {
    build.addCase(getUser.pending, (state) => {
      state.loading = true;
    });
    build.addCase(getUser.fulfilled, (state, action) => {
      const response = action.payload.data.map((user) => {
        return {
          ...user,
          address: "",
          company: "",
        };
      })[0];
      console.log(response, "response");
      state.user = response;
      state.loading = false;
    });
    build.addCase(getUser.rejected, (state) => {
      state.user = [];
      state.loading = false;
      alert("Algo salio mal");
    });
    build.addCase(getPost.pending, (state) => {
      state.loading = true;
    });
    build.addCase(getPost.fulfilled, (state, action) => {
      state.user_posts = action.payload.data;
      state.loading = false;
    });
    build.addCase(getPost.rejected, (state) => {
      (state.user_posts = []), alert("Algo salio mal!!");
    });
  },
});

export default postsSlice.reducer;
