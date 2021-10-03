import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseRegisteration } from "../model/CourseRegisteration";

const getBaseUrl = () => {
    return "https://emcuvtp8x9.execute-api.us-east-1.amazonaws.com/prod";
}

export const fetchCourseRegisteration = createAsyncThunk<CourseRegisteration[], string>("registeration/list", async (userid: string, thunkApi) => {
    const response = await fetch(`${getBaseUrl()}/registeration/listby/${userid}`);
    return response.json();
});

export const registerCourse = createAsyncThunk<CourseRegisteration, CourseRegisteration>("registeration/create", async (registeration: CourseRegisteration, thunkApi) => {
    const req = new Request(`${getBaseUrl()}/registeration/create`, {
        method: "post",
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(registeration)
    });
    const response = await fetch(req);
    return response.json();
})