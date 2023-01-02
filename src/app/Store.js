import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import likeSlice from "./likeSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
    like: likeSlice,
  }
})

export default Store