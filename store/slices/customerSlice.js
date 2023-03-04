import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import baseUrl from "./baseUrl";

const baseURL = `http://${baseUrl}:5100/customers`;
let initialState = {
  customerData: {},
  errors: [],
  isLoading: false,
};

export const signCustomerIn = createAsyncThunk(
  "Customer/signCustomerIn",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`${baseURL}/signin`, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addCustomer = createAsyncThunk(
  "Customers/addCustomer",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(baseURL, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const editCustomer = createAsyncThunk(
  "Customers/editCustomer",
  async (customer, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.put(`${baseURL}/${customer._id}`, customer);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const removeCustomer = createAsyncThunk(
  "Customers/removeCustomer",
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
export const makeOrder = createAsyncThunk(
  "Customers/makeOrder",
  async (order, thunkAPI) => {
    // send request for order route
  }
);

const CustomersSlice = createSlice({
  name: "Customers",
  initialState,
  reducers: {
    logoutCustomer: (state, action) => {
      state.customerData = {};
    },
  },
  extraReducers: {
    [signCustomerIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signCustomerIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
    },
    [signCustomerIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [addCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
    },
    [addCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [editCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [editCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerData = action.payload;
    },
    [editCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
    [removeCustomer.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeCustomer.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.customerData = {};
    },
    [removeCustomer.rejected]: (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    },
  },
});

export const CustomersReducer = CustomersSlice.reducer;
export const CustomersActions = CustomersSlice.actions;
