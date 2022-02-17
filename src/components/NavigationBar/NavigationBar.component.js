import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavigationBar.stylesheet.css';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Logo from '../../logo.png';
const NavigationBar = () => {
    return(
        <>
           <Navbar className="navbar" sticky="top" collapseOnSelect expand="sm" bg="light" variant="light">
            <Container className="navbar-main-container">
            <div className="navbar-shopping-cart" ><AiOutlineShoppingCart size={50} /></div>
            <Navbar.Brand href="/home"><img className="navbar-brand-logo" src={Logo}/></Navbar.Brand>
            <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/about">About Us</Nav.Link>
                <Nav.Link href="/history">Coffee History</Nav.Link>
                <NavDropdown title="Coffee Varities" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/black">Black</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/espresso">Espresso</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cortado">Cortado</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cappucino">Cappuccino</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}
export default NavigationBar;