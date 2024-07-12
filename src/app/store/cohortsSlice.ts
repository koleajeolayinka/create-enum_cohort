// src/app/store/cohortsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataItem {
    id: number;
    name: string;
    description: string;
    image: string;
    programs: string;
    date: string;
}

interface CohortsState {
    cohorts: DataItem[];
    showForm: boolean;
}
const initialState: CohortsState = {
    cohorts: [],
    showForm: false, // Initial state for form visibility
};

const cohortsSlice = createSlice({
    name: 'cohorts',
    initialState,
    reducers: {
        addCohort: (state, action: PayloadAction<DataItem>) => {
            state.cohorts.push(action.payload);
        },
        openForm: (state) => {
            state.showForm = true;
        },
        closeForm: (state) => {
            state.showForm = false;
        },
    },
});

export const { addCohort, openForm, closeForm } = cohortsSlice.actions;
export default cohortsSlice.reducer;
