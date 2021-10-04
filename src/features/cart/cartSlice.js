import { createSlice } from '@reduxjs/toolkit'

/* Function for calculating the total cost of an item (with or without discount).
The function accepts the product, the id of the promotional product
and the discount conditions as arguments.*/
const getTotalPriceByItem = (product, saleId, discountKg) => {
    const { amount, id, price } = product
    // 3x10=30(без скидки)
    // 3х10=25(по условию технического задания)
    //30/25=6/5=1.2
    const discountPercent = 1.2 /*20% sale*/

    if (id === saleId) {
        if (amount % discountKg === 0) {
            product.total = (price * amount) / discountPercent
        } else {
            //the quantity of parts of the promotional kilogram in the total quantity of kilograms.
            let part = Math.floor(amount / discountKg)
            // calc price with sale 20%
            let salePrice = (price * part * discountKg) / discountPercent
            product.total = (amount - part * discountKg) * price + salePrice
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
            // call the function of calculating the amount by position(sale conditions: papaya(id=3),any price per 3kg)
            getTotalPriceByItem(clickedItemInCart, 3, 3)
        },
        counterDecrement: (state, action) => {
            const clickedItemInCart = state.find(p => p.id === action.payload)
            clickedItemInCart.amount--
            // call the function of calculating the amount by position(sale conditions: papaya(id=3),any price per 3kg)
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

// const getTotalPriceByItem = (product, saleId, discountKg, discountPrice) => {
//     const { amount, id, price } = product

//     if (id === saleId) {
//         if (amount % discountKg === 0) {
//             product.total = (amount / discountKg) * discountPrice
//         } else {
//             //the quantity of parts of the promotional kilogram in the total quantity of kilograms.
//             let part = Math.floor(amount / discountKg)
//             product.total =
//                 (amount - part * discountKg) * price + part * discountPrice
//         }
//     } else product.total = amount * price
// }
