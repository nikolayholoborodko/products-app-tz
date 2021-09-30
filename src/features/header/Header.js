import { useSelector } from 'react-redux'
import { selectProductInCart } from '../cart/cartSlice'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
    const cartSize = useSelector(selectProductInCart).length

    return (
        <Navbar
            sticky="top"
            collapseOnSelect
            expand="sm"
            bg="dark"
            variant="dark"
        >
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>
                            Products
                        </Nav.Link>
                        <Nav.Link to="/cart" as={Link}>
                            Cart <Badge bg="danger">{cartSize}</Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
