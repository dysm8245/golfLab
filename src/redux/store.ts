import { configureStore } from "@reduxjs/toolkit";
import { user } from "./slices/UserSlice";
import { combineReducers } from 'redux'

const reducer = combineReducers({
    user
})

const store = configureStore({
    reducer,
    devTools: true,
});

export default store;