import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addItemToCart, countItems, removeItemFromCart, totalPriceCalculate } from "./cart.action.method";


const initialState = {
    cartItems: [],
    totalPrice: 0,
    countItems: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {

            state.cartItems = addItemToCart(state.cartItems, action.payload);

            console.log(state.cartItems);
            state.totalPrice = totalPriceCalculate(state.cartItems);
            state.countItems = countItems(state.cartItems);
        },
        removFromCart: (state, action) => {
            state.cartItems = removeItemFromCart(state.cartItems, action.payload)
            state.totalPrice = totalPriceCalculate(state.cartItems);
            state.countItems = countItems(state.cartItems);

        },
        clearItemsCart: (state, action) => {

            state.cartItems = [];
            state.totalPrice = 0;
            state.countItems = 0;

            console.log(state.cartItems);

        }
    },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
