import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../Redux/productsSlice";
import searchSlice from "../Redux/searchSlice";
import cartSlice from "../Redux/cartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        similar: searchSlice,
        cart: cartSlice,
        cartIncrement: cartSlice,
        availableCategories: cartSlice
    },
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch