import {configureStore} from "@reduxjs/toolkit";
import charactersReducer from "./AsynCharacters/AsyncCharactersSlice";
import likedCharacters from "./LikedCharacters/likedCharactersSlice";

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        likedCharacters
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
