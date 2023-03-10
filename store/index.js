import { configureStore } from "@reduxjs/toolkit";
import { MenuItemsReducer } from "./slices/menuItemSlice";
import { cartReducer } from "./slices/cart";
import { mealReducer } from "./slices/mealSlice";
import { restaurantReducer } from "./slices/resturants";
import { CustomersReducer } from "./slices/customerSlice";
const store = configureStore({
  reducer: {
    menuItems: MenuItemsReducer,
    cartSlice: cartReducer,
    mealSlice: mealReducer,
    resturantSlice: restaurantReducer,
    customers: CustomersReducer,
  },
});

export default store;
