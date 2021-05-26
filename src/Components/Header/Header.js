import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar className='p-4'bg="dark" expand="lg">
                <Link className='links' to="/">GodFather</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <NavLink exact activeClassName="active" className="mr-5 off" to="/">Home</NavLink>
                        <NavLink exact activeClassName="active" className="mr-5 off" to="/about">About</NavLink>
                        <NavLink exact activeClassName="active" className="mr-5 off" to="/service">Service</NavLink>
                        <NavLink exact activeClassName="active" className="mr-5 off" to="/contact">Contact</NavLink>``         
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;