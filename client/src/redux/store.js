import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';
import cartReducer from './slices/cartSlice';

export default configureStore({
    reducer: {
        items: itemsReducer,
        cart: cartReducer
    }
})