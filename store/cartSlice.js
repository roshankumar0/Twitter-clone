import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name: 'name',
    initialState: { name: 'Roshan kumar', username: "ROSHNN01" },
    reducers: {
        updateUsername: (state, action) => {
            state.username = action.payload
        },
    },
});

export const { updateUsername } = nameSlice.actions;
export default nameSlice.reducer;
