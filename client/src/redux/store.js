import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './slices/itemsSlice';

export default configureStore({
    reducer: {
        items: itemsReducer
    }
})