import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const store = configureStore({
    reducer: {
        names: cartReducer
    }
})
export default store