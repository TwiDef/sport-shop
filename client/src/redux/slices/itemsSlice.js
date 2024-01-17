import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import itemsService from "../../services/itemsService";

/* get all bikes */
export const fetchBikes = createAsyncThunk('GET_BIKES', async (_, thunkAPI) => {
    try {
        return await itemsService.getItems('bikes')
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
/* ************** */

/* get all boards */
export const fetchBoards = createAsyncThunk('GET_BOARDS', async (_, thunkAPI) => {
    try {
        return await itemsService.getItems('boards')
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})
/* ************** */

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        bikes: [],
        boards: [],
        isError: false,
        isLoading: false,
        message: ""
    },
    extraReducers: (builder) => {
        /* fetchBikes */
        builder.addCase(fetchBikes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchBikes.fulfilled, (state, action) => {
            state.isLoading = false
            state.bikes = action.payload
        })
        builder.addCase(fetchBikes.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.bikes = []
        })
        /* fetchBikes */

        /* fetchBoards */
        builder.addCase(fetchBoards.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchBoards.fulfilled, (state, action) => {
            state.isLoading = false
            state.boards = action.payload
        })
        builder.addCase(fetchBoards.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload.message
            state.boards = []
        })
        /* fetchBoards */
    }
})

export const { } = itemsSlice.actions

export default itemsSlice.reducer