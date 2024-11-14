import React from 'react'
import { Container, Nav, Navbar, Form, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <Navbar expand="lg" className="bg-info">
            <Container>
                <Navbar.Brand>
                    <Link to='/' style={{ textDecoration: 'none', color: 'white', fontSize: '30px' }}>
                        <i className="fa-solid fa-truck-fast fa-bounce"></i> E-Cart
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Form.Control
                    type="text"
                    placeholder="Search"
                    className="ms-5 w-25"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="btn btn-outline-light">
                            <Link to='/wishlist' style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                                <i className="fa-solid fa-heart text-danger"></i> Wishlist
                                <Badge bg="success rounded ms-2">0</Badge>
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="btn btn-outline-light ms-2">
                            <Link to='/cart' style={{ color: 'black', fontWeight: 'bold', textDecoration: 'none' }}>
                                <i className="fa-solid fa-cart-shopping text-warning"></i> Cart
                                <Badge bg="success rounded ms-2">0</Badge>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
