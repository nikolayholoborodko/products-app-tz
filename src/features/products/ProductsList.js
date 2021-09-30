import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from './productsSlice'
import { ProductItem } from './ProductItem'
import { Container, Row } from 'react-bootstrap'
import './products.css'

export const ProductsList = () => {
    const products = useSelector(selectProducts)

    return (
        <div className="products">
            <Container>
                <Row>
                    {products.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </Row>
            </Container>
        </div>
    )
}
