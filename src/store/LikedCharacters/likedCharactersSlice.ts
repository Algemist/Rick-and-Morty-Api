import {createSlice} from "@reduxjs/toolkit";
import {ICharacter} from "../../types";

interface ILikedCharacterSlice {
    characters: ICharacter[],
    status: boolean,
}

const initState: ILikedCharacterSlice = {
    characters: [],
    status: false,
}

const likedCharactersSlice = createSlice({
    name: 'likedCharacters',
    initialState: initState,
    reducers: {
        addCharacter(state, action) {
            state.characters.push(action.payload);
        },

        removeFromLikedArr(state, action) {
            const character = state.characters.find(characters => characters.id === action.payload.id);
            if (character)
                state.characters = state.characters.filter(character => character.id !== action.payload.id);
        },

        switchStatus(state, action) {
            state.status = action.payload;
        }
    }
})

export default likedCharactersSlice.reducer;
export const {addCharacter, switchStatus, removeFromLikedArr} = likedCharactersSlice.actions;