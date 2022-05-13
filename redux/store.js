import { configureStore } from '@reduxjs/toolkit';
import quizzSlice from './slices/quizzSlice';
import noteSlice from './slices/noteSlice';

export const store = configureStore({
    reducer: {
        note: noteSlice,
        quizz: quizzSlice
    },
});