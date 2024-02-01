import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },
    reducers: {
        addItemToCart: (state, action) => {
            const findCartItem = state.cartItems.find(item => item.id === action.payload.id)

            if (findCartItem) {
                findCartItem.count++
            } else {
                state.cartItems.push({ ...action.payload, count: 1 })
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload)

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        plusItem: (state, action) => {
            const findCartItem = state.cartItems.find(item => item.id === action.payload.id)
            if (findCartItem) {
                findCartItem.count++
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        },
        minusItem: (state, action) => {
            const findCartItem = state.cartItems.find(item => item.id === action.payload.id)
            if (findCartItem) {
                findCartItem.count--
            }

            state.totalPrice = state.cartItems.reduce((sum, item) => {
                return sum + item.price * item.count
            }, 0)
        }
    }
})

export const {
    addItemToCart,
    removeItemFromCart,
    plusItem,
    minusItem
} = cartSlice.actions

export default cartSlice.reducer