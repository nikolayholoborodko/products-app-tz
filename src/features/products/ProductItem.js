import { Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { selectProductInCart } from '../cart/cartSlice'

export const ProductItem = ({ product }) => {
    const dispatch = useDispatch()
    const productsInCart = useSelector(selectProductInCart)
    const inCart = productsInCart.map(p => p.id).includes(product.id)

    return (
        <Col md={4}>
            <div className="products__item">
                <img src={product.image} alt="product" />
                <h2>{product.name}</h2>
                <p>price: ${product.price}</p>
                <Button
                    onClick={() => dispatch(addToCart(product))}
                    variant="danger"
                    disabled={inCart ? true : false}
                >
                    Add to cart
                </Button>
                {product.name === 'papaya' ? (
                    <span className="sale swing">
                        <strong>$25 </strong>for every <strong>3 kg</strong>
                    </span>
                ) : null}
            </div>
        </Col>
    )
}
