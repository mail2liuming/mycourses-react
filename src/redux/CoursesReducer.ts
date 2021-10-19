import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseFrequency, CourseRegisteration, CourseRun } from "../model/CourseRegisteration";
import { registerCourse } from "./CoursesThunk";

const initialState = [] as CourseRegisteration[];

const coursesReducer = createSlice({
    name: "courses",
    initialState,
    reducers: {
        createCourse: {
            reducer: (state, action: PayloadAction<CourseRegisteration>) => { state.push(action.payload) },
            prepare: (userEmail: string, courseName: string, kidName: string, frequency: CourseFrequency, courses: CourseRun[]) => ({
                payload: {
                    userEmail,
                    courseName,
                    kidName,
                    frequency,
                    courses
                }
            })
        },
        deleteCource(state, action: PayloadAction<string>) {
            const index = state.findIndex((course) => course.userEmail === action.payload);
            state.splice(index, 1);
        },
        updateCource(state, action: PayloadAction<CourseRegisteration>) {
            const index = state.findIndex((course) => course.userEmail === action.payload.userEmail);
            state[index] = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(registerCourse.fulfilled, (state, { payload }) => { state.push(payload) })
    }
}
);

export const { createCourse, deleteCource, updateCource } = coursesReducer.actions;
export default coursesReducer.reducer;