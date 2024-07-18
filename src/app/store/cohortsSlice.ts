import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DataItem {
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
            const { id } = action.payload;
            const exists = state.cohorts.find(cohort => cohort.id === id);
            if (!exists) {
                state.cohorts.push(action.payload);
            }
        },
        openForm: (state) => {
            state.showForm = true;
        },
        closeForm: (state) => {
            state.showForm = false;
        },
    },
    // reducers: {
    //     addCohort: (state, action: PayloadAction<DataItem>) => {
    //         state.cohorts.push(action.payload);
    //     },
    //     openForm: (state) => {
    //         state.showForm = true;
    //     },
    //     closeForm: (state) => {
    //         state.showForm = false;
    //     },
    // },
});

export const { addCohort, openForm, closeForm } = cohortsSlice.actions;
export default cohortsSlice.reducer;
