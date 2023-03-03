import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:5100/meals";
let initialState = {
  MenuItemsList: [],
  errors: [],
  isLoading: false,
};

export const getAllMenuItems = createAsyncThunk(
  "MenuItems/getAllMenuItems",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(baseURL);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getMenuItemById = createAsyncThunk(
  "MenuItems/getMenuItemById",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addMenuItem = createAsyncThunk(
  "MenuItems/createMenuItem",
  async (MenuItem, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(baseURL, MenuItem);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editMenuItem = createAsyncThunk(
  "MenuItems/editMenuItem",
  async (MenuItem, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(`${baseURL}/${MenuItem._id}`, MenuItem);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeMenuItem = createAsyncThunk(
  "MenuItems/removeMenuItem",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.delete(`${baseURL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const MenuItemsSlice = createSlice({
  name: "MenuItems",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllMenuItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getAllMenuItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MenuItemsList = action.payload;
    },
    [getAllMenuItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [getMenuItemById.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getMenuItemById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MenuItemsList = action.payload;
    },
    [getMenuItemById.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [addMenuItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addMenuItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.MenuItemsList = action.payload;
    },
    [addMenuItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [editMenuItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editMenuItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      //   state.MenuItemsList = action.payload;
    },
    [editMenuItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [removeMenuItem.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeMenuItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      //   state.MenuItemsList = action.payload;
    },
    [removeMenuItem.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const MenuItemsReducer = MenuItemsSlice.reducer;
export const MenuItemsActions = MenuItemsSlice.actions;
