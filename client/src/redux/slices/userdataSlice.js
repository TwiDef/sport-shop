import { createSlice } from "@reduxjs/toolkit";

export const userdataSlice = createSlice({
    name: "userdata",
    initialState: {
        boughtItems: null,
        userContacts: null,
        totalPrice: 0
    },
    reducers: {
        onBuyItems: (state, action) => {
            state.boughtItems = (action.payload[0])
            state.totalPrice = action.payload[0].reduce((acc, item) => {
                return acc + item.price * item.count
            }, 0)
            state.userContacts = action.payload[1]
        }
    }
})

export const {
    onBuyItems
} = userdataSlice.actions

export default userdataSlice.reducer