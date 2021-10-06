import { createSlice } from '@reduxjs/toolkit'

/* Function for calculating the total cost of an item (with or without discount).
The function accepts the product, the id of the promotional product
and the discount conditions as arguments.*/
const getTotalPriceByItem = (product, saleId, discountKg) => {
    const { amount, id, price } = product
    let sale = 2 * price + price / 2

    if (id === saleId) {
        if (amount % discountKg === 0) {
            product.total = (amount / discountKg) * sale
        } else {
            //the quantity of parts of the promotional kilogram in the total quantity of kilograms.
            let part = Math.floor(amount / discountKg)
            product.total = (amount - part * discountKg) * price + part * sale
        }
    } else product.total = amount * price
}

//create slice with reducers
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
            const clickedItemInCart = state.find(p => p.id === action.payload)
            clickedItemInCart.amount++
            // call the function of calculating the amount by position
            getTotalPriceByItem(clickedItemInCart, 3, 3)
        },
        counterDecrement: (state, action) => {
            const clickedItemInCart = state.find(p => p.id === action.payload)
            clickedItemInCart.amount--
            // call the function of calculating the amount by position
            getTotalPriceByItem(clickedItemInCart, 3, 3)
        },
        removeFromCart: (state, action) => {
            const productsInCart = state.filter(
                product => product.id !== action.payload
            )
            return productsInCart
        },
    },
})

//export actions
export const { addToCart, counterIncrement, counterDecrement, removeFromCart } =
    cartSlice.actions

//create selector functions
export const selectProductInCart = state => state.cart
export const selectTotalPriceInCart = state =>
    state.cart
        .map(product => product.total)
        .reduce((acc, curr) => acc + curr, 0)

//export slice as reducer
export default cartSlice.reducer
