import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/productSlice';

const cartStore = configureStore({
    reducer: {
        products: productSlice // Changed from 'productReducer' to 'products' to match the naming convention
    }
});

export default cartStore;
