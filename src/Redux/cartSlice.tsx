import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface cartState {
    value: Array<number>
}

const initialState = {
    value: []
} as cartState

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cartInfo: (state, action: PayloadAction<Array<number>>) => {
            state.value = action.payload;
            //console.log("From cartSlice ", state.value);
        },
    },
})

export const { cartInfo } = cartSlice.actions
export const selectSearch = (state: RootState) => state.cart.value
export default cartSlice.reducer