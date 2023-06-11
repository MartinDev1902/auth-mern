import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/auth";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: auth
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(thunk)
})