import { createAsyncThunk } from "@reduxjs/toolkit";
import { CourseRegisteration } from "../model/CourseRegisteration";
import Auth, { CognitoUser } from "@aws-amplify/auth";

const getBaseUrl = () => {
    return "https://ojimd9yan7.execute-api.us-east-1.amazonaws.com/prod";
}

export const fetchCourseRegisteration = createAsyncThunk<CourseRegisteration[], string>("registeration/list", async (userid: string, thunkApi) => {
    const response = await fetch(`${getBaseUrl()}/registeration/listby/${userid}`);
    return response.json();
});

export const registerCourse = createAsyncThunk<CourseRegisteration, CourseRegisteration>("registeration/create", async (registeration: CourseRegisteration, thunkApi) => {
    const user: CognitoUser = await Auth.currentAuthenticatedUser()
    const token = user.getSignInUserSession()?.getIdToken().getJwtToken()
    const req = new Request(`${getBaseUrl()}/registeration/create`, {
        method: "post",
        headers: new Headers({
            'content-type': 'application/json',
            'Authorization': `${token}`,
            'Access-Control-Allow-Origin': '*'
        }),
        body: JSON.stringify(registeration)
    });
    const response = await fetch(req);
    return response.json();
})