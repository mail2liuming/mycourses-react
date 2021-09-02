import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Course } from "../model/Course";
import { v4 as uuid } from "uuid";

const initialState = [] as Course[];

const coursesReducer = createSlice({
    name: "courses",
    initialState,
    reducers: {
        createCourse: {
            reducer: (state, action: PayloadAction<Course>) => { state.push(action.payload) },
            prepare: (name: string, description: string, date: string, repeatable: boolean, address: string) => ({
                payload: {
                    id: uuid(),
                    name,
                    description,
                    date,
                    repeatable,
                    address
                }
            })
        },
        deleteCource(state, action: PayloadAction<string>) {
            const index = state.findIndex((course) => course.id === action.payload);
            state.splice(index, 1);
        },
        updateCource(state, action: PayloadAction<Course>) {
            const index = state.findIndex((course) => course.id === action.payload.id);
            state[index] = action.payload;
        }
    }
}
);

export const { createCourse, deleteCource, updateCource } = coursesReducer.actions;
export default coursesReducer.reducer;