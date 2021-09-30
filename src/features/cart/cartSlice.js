import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const total = {
                total: action.payload.price * action.payload.amount,
            }
            state.push(Object.assign({}, action.payload, total))
        },
        counterIncrement: (state, action) => {
            const foundItem = state.find(p => p.id === action.payload)
            foundItem.amount++
            if (foundItem.name === 'papaya') {
                if (foundItem.amount % 3 === 0) {
                    foundItem.total = Math.ceil(foundItem.amount * 8.3)
                } else {
                    let numberOfParts = Math.floor(foundItem.amount / 3)
                    foundItem.total =
                        (foundItem.amount - numberOfParts * 3) *
                            foundItem.price +
                        numberOfParts * Math.ceil(3 * 8.3)
                }
            } else foundItem.total = foundItem.amount * foundItem.price
        },
        counterDecrement: (state, action) => {
            const foundItem = state.find(p => p.id === action.payload)
            foundItem.amount--
            if (foundItem.name === 'papaya') {
                if (foundItem.amount % 3 === 0) {
                    foundItem.total = Math.ceil(foundItem.amount * 8.3)
                } else {
                    let numberOfParts = Math.floor(foundItem.amount / 3)
                    foundItem.total =
                        (foundItem.amount - numberOfParts * 3) *
                            foundItem.price +
                        numberOfParts * Math.ceil(3 * 8.3)
                }
            } else foundItem.total = foundItem.amount * foundItem.price
        },
        removeFromCart: (state, action) => {
            const productInCart = state.filter(
                product => product.id !== action.payload
            )
            return productInCart
        },
    },
})

export const { addToCart, counterIncrement, counterDecrement, removeFromCart } =
    cartSlice.actions

export const selectProductInCart = state => state.cart

export default cartSlice.reducer
