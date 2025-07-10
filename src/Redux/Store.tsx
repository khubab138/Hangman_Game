import { configureStore } from "@reduxjs/toolkit";
import wordreducers from "./Slices/Slice"

export const store = configureStore({
    reducer:{
        words:  wordreducers,

    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch