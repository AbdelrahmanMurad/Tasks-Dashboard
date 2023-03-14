import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth-slice";
import { tasksReducer } from "./slices/tasks-slice";

export const reduxStore = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
  },
});
