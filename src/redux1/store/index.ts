import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./../slices/index.ts"

const store = configureStore({reducer : {
    todos : todoReducer
}})

export  default store