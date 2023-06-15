import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import thunk from "redux-thunk";
import users from "./reducers/users";

export const store = configureStore({
    reducer: {
        auth: auth,
        users: users
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
})