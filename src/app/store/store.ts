import { configureStore } from '@reduxjs/toolkit';
import cohortsReducer from './cohortsSlice';

const store = configureStore({
    reducer: {
        cohorts: cohortsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
