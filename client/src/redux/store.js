import { configureStore } from '@reduxjs/toolkit';
import bikeReducer from './slices/bikeSlice';

export default configureStore({
    reducer: {
        bikes: bikeReducer
    }
})