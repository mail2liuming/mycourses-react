import { configureStore } from "@reduxjs/toolkit";
import CoursesReducer from "./CoursesReducer";

export const store = configureStore({
    reducer: {
        courses: CoursesReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;