import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

interface productState {
    value: Array<TProduct>
    chosenCat: Array<TProduct>
    category: Array<string>
}

const initialState = {
    value: [],
    chosenCat: [],
    category: []
} as productState

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        availableCategories: (state, action: PayloadAction<Array<string>>) => {
            state.category = action.payload
        },
        dataStore: (state, action: PayloadAction<Array<TProduct>>) => {
            state.value = action.payload;
        },
        chosenCategory: (state, action: PayloadAction<Array<TProduct>>) => {
            state.chosenCat = action.payload;
        },
    },
})

export const { dataStore, chosenCategory, availableCategories } = productSlice.actions
export const categoriesRedux = (state: RootState) => state.products.category
export const selectData = (state: RootState) => state.products.value
export const selectCategory = (state: RootState) => state.products.chosenCat
export default productSlice.reducer