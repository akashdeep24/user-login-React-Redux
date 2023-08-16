import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/user"

export const store = configureStore({
    reducer:{
        user:userReducer,
    }
});

