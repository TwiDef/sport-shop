import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemsService from "../../services/itemsService";

export const fetchBikes = createAsyncThunk('GET_BIKES', async (_, thunkAPI) => {
    try {
        return await itemsService.getItems('bikes')
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const bikeSlice = createSlice({
    name: 'bikes',
    initialState: {
        bikes: [],
        isError: false,
        isLoading: false,
        message: ""
    },
    extraReducers(builder) {
        builder
            .addCase(fetchBikes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchBikes.fulfilled, (state, action) => {
                state.isLoading = false
                state.bikes = action.payload
            })
            .addCase(fetchBikes.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload.message
                state.bikes = []
            })
    }
})

export const { } = bikeSlice.actions

export default bikeSlice.reducer