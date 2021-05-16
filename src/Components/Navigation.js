import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
    <>
        <Navbar collapseOnSelect bg='light' variant='light'>
            <Navbar.Brand href='https://github.com/dreg601'>
                Zhalnin Dima
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav>
                    <Nav.Link ><Link  to='/home'>Slider</Link></Nav.Link>
                    <Nav.Link ><Link to='/registration'>Registration</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
    )
}

//<Link to='/'></Link>
