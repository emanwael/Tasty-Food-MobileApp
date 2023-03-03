import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";
import { cartReducer } from "./slices/cart";
import { mealReducer } from "./slices/mealSlice";

const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
    cartSlice: cartReducer,
    mealSlice: mealReducer,

  },
});

export default store;
