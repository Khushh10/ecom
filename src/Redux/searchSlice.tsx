import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface searchState {
    value: Array<TProduct>
}

const initialState = {
    value: []
} as searchState

export const searchSlice = createSlice({
    name: "similar",
    initialState,
    reducers: {
        similarProduct: (state, action: PayloadAction<Array<TProduct>>) => {
            state.value = action.payload;
            //console.log("From productSlice ", state.value);
        },
    },
})

export const { similarProduct } = searchSlice.actions
export const selectSearch = (state: RootState) => state.similar.value
export default searchSlice.reducer