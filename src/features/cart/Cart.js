import { useSelector } from 'react-redux'
import { selectProductInCart } from './cartSlice'
import { selectTotalPriceInCart } from './cartSlice'
import { ProductInCart } from './ProductInCart'
import { Container, Row } from 'react-bootstrap'
import './cart.css'

export const Cart = () => {
    //call the selector function to get products in the cart
    const productsInCart = useSelector(selectProductInCart)
    //call the selector function to calculate the sum of all products and return the result
    const totalPriceInCart = useSelector(selectTotalPriceInCart)

    return (
        <div className="cart">
            <Container>
                <Row>
                    {productsInCart.length === 0 ? (
                        <h2>Your cart is empty...</h2>
                    ) : (
                        <>
                            {productsInCart.map(product => (
                                <ProductInCart
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                            <h2>Total: ${totalPriceInCart}</h2>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    )
}
