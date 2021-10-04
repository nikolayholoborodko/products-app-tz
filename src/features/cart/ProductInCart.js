import { Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { counterIncrement, counterDecrement, removeFromCart } from './cartSlice'

export const ProductInCart = ({ product }) => {
    //useDispatch returns a reference to the dispatch function from the Redux store
    const dispatch = useDispatch()

    return (
        <Col md={8} className="mx-auto">
            <div className="cart__item">
                <img src={product.image} alt="product" />
                <p>{product.name}</p>

                <div className="cart-counter">
                    <Button
                        variant="success"
                        onClick={() => dispatch(counterDecrement(product.id))}
                        disabled={product.amount <= 1 ? true : false}
                    >
                        -
                    </Button>
                    <Button
                        variant="success"
                        onClick={() => dispatch(counterIncrement(product.id))}
                    >
                        +
                    </Button>
                    <span>{product.amount}</span>
                </div>

                <p>${product.price}</p>
                <p>
                    <strong>${product.total}</strong>
                </p>
                <Button
                    className="cart__item-btn"
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(product.id))}
                >
                    Remove
                </Button>
            </div>
        </Col>
    )
}
