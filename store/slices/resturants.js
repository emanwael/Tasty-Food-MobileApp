import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "./baseUrl";



const initialState = {
    restaurant: [],
    error: null,
    isLoading: false
}

const restaurantUrl = `http://${baseUrl}:5100/restaurants`;


export const getAllrestaurant = createAsyncThunk("myMenu/getAllMenu", async (id, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(`${restaurantUrl}`);
        // console.log("response", response.data)
        return response.data;

    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)

    }
})


const restaurantSlice = createSlice({
    name: "resturants",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllrestaurant.pending]: (state, action) => {
            state.isLoading = true
        },
        [getAllrestaurant.fulfilled]: (state, action) => {
            state.isLoading = false
            state.restaurant = action.payload

        },
        [getAllrestaurant.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
    }


});

export const restaurantReducer = restaurantSlice.reducer;
export const restaurantActions = restaurantSlice.actions;