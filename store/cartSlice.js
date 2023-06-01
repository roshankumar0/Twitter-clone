import { createSlice } from '@reduxjs/toolkit';

const nameSlice = createSlice({
    name: 'name',
    initialState: {
        name: 'Roshan Kumar', username: 'ROSHNN01', userProfile: "https://tse2.mm.bing.net/th?id=OIP.IxheWOxIH3MVVcUKPDJwtgHaD4&pid=Api&P=0&h=180",
        email: '',
        tweet: [],
        isLoggedIn: false,
        value: 0
    },
    reducers: {
        updateUserInfo: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
        },
        updateEmail: (state, action) => {
            state.email = [...state.email, ...action.payload];
        },
        Tweet: (state, action) => {
            state.tweet = [...state.tweet, action.payload]
        },
        Login: (state) => {
            state.isLoggedIn = true
        },
        Logout: (state) => {
            state.isLoggedIn = false
        },
        increament: (state) => {
            state.value += 1
        },
        decreament: (state) => {
            state.value -= 1
        }
    },
});

export const { updateUserInfo, updateEmail, Tweet, Login, Logout ,increament,decreament} = nameSlice.actions;
export default nameSlice.reducer;
