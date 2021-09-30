import { useSelector } from 'react-redux'
import { selectProductInCart } from './cartSlice'
import { ProductInCart } from './ProductInCart'
import { Container, Row } from 'react-bootstrap'
import './cart.css'

export const Cart = () => {
    const productsInCart = useSelector(selectProductInCart)
    const totalPriceInCart = productsInCart
        .map(product => product.total)
        .reduce((acc, curr) => acc + curr, 0)

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
