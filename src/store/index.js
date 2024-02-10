import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./product";
import authSlice from "./authSlice";

const store = configureStore({
    reducer:{
        [productSlice.reducerPath]:productSlice.reducer,
        auth:authSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
})

export default store