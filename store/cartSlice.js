import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        name: 'Roshan Kumar', username: 'ROSHNN01', userProfile: "https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180",
        email: [],
    },
    reducers: {
        updateUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
        },
        updateEmail: (state, action) => {
            state.email = [...state.email, ...action.payload];
        }

    },
});

export const { updateUserInfo, updateEmail } = nameSlice.actions;
export default nameSlice.reducer;
