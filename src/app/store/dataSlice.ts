// src/app/store/dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataItem {
    // Define your data structure here
}

interface DataState {
    data: DataItem[];
    showForm: boolean;
}

const initialState: DataState = {
    data: [],
    showForm: false,
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        openForm: (state) => {
            state.showForm = true;
        },
        closeForm: (state) => {
            state.showForm = false;
        },
        addData: (state, action: PayloadAction<DataItem>) => {
            state.data.push(action.payload);
        },
        // ... other reducers (editData, deleteData)
    },
});

export const { openForm, closeForm, addData } = dataSlice.actions;
export default dataSlice.reducer;
