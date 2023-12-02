import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slicies/counterSlice";
import usersSlice from "../slicies/usersSlice";

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    users: usersSlice,
  },
});


