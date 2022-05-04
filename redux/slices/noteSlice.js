import { createSlice } from '@reduxjs/toolkit';

const init = {
    listNote: [],
    currentNote: {}
}

export const noteSlice = createSlice({
    name: 'note',
    initialState: init,
    reducers: {
        SET_LIST_NOTE: (state, action) =>
        {
            state.listNote = action.payload;
            return state;
        },
        SET_CURRENT_NOTE: (state, action) =>
        {
            state.currentNote = action.payload;
            return state;
        }
    },
    extraReducers: {}
});

export const { SET_LIST_NOTE, SET_CURRENT_NOTE } = noteSlice.actions;

export default noteSlice.reducer;