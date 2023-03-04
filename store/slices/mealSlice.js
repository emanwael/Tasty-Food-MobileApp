import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    myMenu: [],
    meals: [],
    restaurantInfo: {},
    error: null,
    isLoading: false
}
const restaurantUrl = "http://localhost:5100/restaurants";
const mealUrl = "http://localhost:5100/meals";


export const getAllMeals = createAsyncThunk("myMenu/getAllMenu", async (id, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.get(`${restaurantUrl}/${id}`);
        console.log(response.data)
        return response.data;

    } catch (error) {
        return rejectWithValue(error.message)

    }
})
export const deletMeal = createAsyncThunk("myMenu/deleteMeal", async (mealId, thunkAPI) => {
    console.log(mealId)
    const { rejectWithValue } = thunkAPI;
    try {
        const response = await axios.delete(`${mealUrl}/${mealId}`);

        console.log(response.data)
        return response.data;

    } catch (error) {

        return rejectWithValue(error.message)
    }
})
export const getMeal = createAsyncThunk("myMenu/deleteMeal", async (mealId, thunkAPI) => {

    const { rejectWithValue } = thunkAPI;
    try {

        const response = await axios.get(`${mealUrl}/${mealId}`);

        return response.data;

    } catch (error) {

        return rejectWithValue(error.message)
    }
})

const mealSlice = createSlice({
    name: "myMenu",
    initialState,
    reducers: {
    },
    extraReducers: {
        [getAllMeals.pending]: (state, action) => {
            state.isLoading = true
        },
        [getAllMeals.fulfilled]: (state, action) => {
            state.isLoading = false
            state.myMenu = action.payload.menu
            state.meals = action.payload.meals
            state.restaurantInfo = action.payload

        },
        [getAllMeals.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
        /////////////////////
        [getMeal.pending]: (state, action) => {
            state.isLoading = true
        },
        [getMeal.fulfilled]: (state, action) => {
            state.isLoading = false
            state.myMenu = action.payload
            console.log(myMenu)
        },
        [getMeal.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
        /////////////
        [deletMeal.pending]: (state, action) => {
            state.isLoading = true
        },
        [deletMeal.fulfilled]: (state, action) => {
            state.isLoading = false
            state.myMenu = state.myMenu.filter((e) => e.id !== action.payload._id)
        },
        [deletMeal.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload;
        },
    }

});

export const mealReducer = mealSlice.reducer;
export const mealActions = mealSlice.actions;