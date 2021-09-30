import React from 'react'
import { Header } from './features/header/Header'
import { ProductsList } from './features/products/ProductsList'
import { Cart } from './features/cart/Cart'
import { Switch, Route } from 'react-router-dom'

export const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={ProductsList} />
                <Route exact path="/cart" component={Cart} />
            </Switch>
        </>
    )
}

export default App
