import { configureStore } from "@reduxjs/toolkit";
import { todosReducers } from "./todosSlice";

// const reducers = combineReducers({
//     todos: todosReducers
// })

export const store = configureStore({
    reducer: todosReducers
})

export type RootState = ReturnType<typeof store.getState>

