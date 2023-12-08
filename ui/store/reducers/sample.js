import { createSlice } from '@reduxjs/toolkit';

export const sample = createSlice({
    name: 'sample',
    initialState: {
        key: 'value'
    },
    reducers: {
        set_key: (state, action) => {
            state.key = action.payload.value;
        },
    },
});

export const { set_key } = sample.actions;

export default sample.reducer;
