import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import cartReducer from '../features/cart/cartSlice'

import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

//combine reducers from slices
const reducers = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

//create persist config
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['products'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

//create store
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})
