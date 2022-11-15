import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {ICharacter} from "../../types";

interface ICharacterState {
    characters: ICharacter[],
    status: 'resolved' | 'error' | 'loading' | 'idle',
    error: string,
}

const initialState: ICharacterState = {
    characters: [],
    status: 'idle',
    error: '',
}

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');

            if (!response.ok) {
                throw new Error('Server Error');
            }

            const data = await response.json();
            return data as ICharacter[];
        } catch (error) {
            if (error instanceof Error)
            return rejectWithValue(error.message);
        }
    },
);

const asyncCharactersSlice = createSlice({
    name: "characters",
    initialState: initialState,
    reducers: {
        removeCharacter(state, action) {
            const character = state.characters.find(characters => characters.id === action.payload.id);
            if (character !== undefined)
                state.characters = state.characters.filter(character => character.id !== action.payload.id);
        },
    },
    extraReducers: {
        [String(fetchCharacters.pending)]: (state, action) => {
            state.status = 'loading';
            state.error = '';
        },

        [String(fetchCharacters.fulfilled)]: (state, action) => {
            state.status = 'resolved';
            state.characters = action.payload.results;
        },

        [String(fetchCharacters.pending)]: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
    }
})

export default asyncCharactersSlice.reducer
export const {removeCharacter} = asyncCharactersSlice.actions;