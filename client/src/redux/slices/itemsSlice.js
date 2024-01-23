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
        currentItem: null,
        isError: false,
        isLoading: false,
        message: "",
        activeCategory: null
    },
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload
        },
        setCurrentItem: (state, action) => {
            console.log(action);
            if (action.payload.type === "bikes") {
                state.currentItem = state.bikes.filter(bike => bike._id === action.payload.id)[0]
            }
            if (action.payload.type === "boards") {
                state.currentItem = state.boards.filter(board => board._id === action.payload.id)[0]
            }
        },
        removeCurrentItem: (state) => {
            state.currentItem = null
        }
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

export const { setActiveCategory, setCurrentItem, removeCurrentItem } = itemsSlice.actions

export default itemsSlice.reducer