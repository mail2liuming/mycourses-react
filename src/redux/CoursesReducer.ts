import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseRegisteration } from "../model/CourseRegisteration";
import { registerCourse } from "./CoursesThunk";

const initialState = [] as CourseRegisteration[];

const coursesReducer = createSlice({
    name: "courses",
    initialState,
    reducers: {
        createCourse: {
            reducer: (state, action: PayloadAction<CourseRegisteration>) => { state.push(action.payload) },
            prepare: (userId: string, courseId: string, name: string, date: string, repeatable: boolean, cost: number) => ({
                payload: {
                    userId,
                    courseId,
                    name,
                    date,
                    repeatable,
                    cost
                }
            })
        },
        deleteCource(state, action: PayloadAction<string>) {
            const index = state.findIndex((course) => course.userId === action.payload);
            state.splice(index, 1);
        },
        updateCource(state, action: PayloadAction<CourseRegisteration>) {
            const index = state.findIndex((course) => course.userId === action.payload.userId);
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