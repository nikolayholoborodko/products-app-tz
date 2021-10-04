import { createSlice } from '@reduxjs/toolkit'

//create products data
const initialState = [
    {
        id: 1,
        image: 'https://res.cloudinary.com/diyn0tee2/image/upload/v1632916260/products/bananas.jpg',
        name: 'banana',
        price: 10,
        amount: 1,
    },
    {
        id: 2,
        image: 'https://res.cloudinary.com/diyn0tee2/image/upload/v1632915334/products/apple.jpg',
        name: 'apple',
        price: 8,
        amount: 1,
    },
    {
        id: 3,
        image: 'https://res.cloudinary.com/diyn0tee2/image/upload/v1633017306/products/papaya_1.jpg',
        name: 'papaya',
        price: 10,
        amount: 1,
    },
]

//create slice
const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
})

//create selector functions
export const selectProducts = state => state.products

//export slice as reducer
export default productsSlice.reducer
