import {createSlice} from "@reduxjs/toolkit";
import {ICharacter} from "../../types";

interface ILikedCharacterSlice {
    characters: ICharacter[]
}

const initState: ILikedCharacterSlice = {
    characters: []
}

const likedCharactersSlice = createSlice({
    name: 'likedCharacters',
    initialState: initState,
    reducers: {
        addCharacter(state, action) {

        },
    }
})

export default likedCharactersSlice.reducer;
export const {addCharacter} = likedCharactersSlice.actions;