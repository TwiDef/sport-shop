import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';
import cartReducer from './slices/cartSlice';
import userdataSlice from './slices/userdataSlice';

export default configureStore({
    reducer: {
        items: itemsReducer,
        cart: cartReducer,
        userdata: userdataSlice
    }
})