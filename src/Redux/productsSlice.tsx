import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface productState {
    value: Array<TProduct>;
    chosenCat: Array<TProduct>;
}

const initialState = {
    value: [],
    chosenCat: []
} as productState

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        dataStore: (state, action: PayloadAction<Array<TProduct>>) => {
            state.value = action.payload;
            //console.log("From State ", state.value);
        },
        chosenCategory: (state, action: PayloadAction<Array<TProduct>>) => {
            state.chosenCat = action.payload;
            //console.log("Chosen Category ", state.chosenCat);
        },
    },
})

export const { dataStore, chosenCategory } = productSlice.actions
export const selectData = (state: RootState) => state.products.value
export default productSlice.reducer