import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface cartState {
    value: Array<number>
    items: number
}

const initialState = {
    value: [],
    items: 0
} as cartState

export const cartSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        cartIncrement: (state) => {
            state.items += 1
        },
        cartInfo: (state, action: PayloadAction<Array<number>>) => {
            state.value = action.payload;
            //console.log("From cartSlice ", state.value);
        },
    },
})

export const { cartInfo, cartIncrement } = cartSlice.actions
export const selectSearch = (state: RootState) => state.cart.value
export default cartSlice.reducer