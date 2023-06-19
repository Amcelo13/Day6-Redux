import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../app/features/todoSlice.js'


const store = configureStore({
    reducer:{
        todo: todoReducer,
    },
})
export default store