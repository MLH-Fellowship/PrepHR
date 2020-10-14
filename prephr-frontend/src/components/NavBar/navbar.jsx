import React from 'react';
import './navbar.css';
import logo from '../../assets/icons/logo.svg'
import * as allPaths from '../../constants/paths'
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = (props) => {
    let showSignUp = 0;
    if (props.number == 1) showSignUp = 1;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='nav-container'>
                <Navbar.Brand href={useLocation().pathname}><img src={logo} width='120' height='40' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" >
                    <i class="fa fa-bars" style={{ color: '#FFFFFF' }}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://github.com/MLH-Fellowship/PrepHR/blob/main/README.md" bsPrefix='nav-element'>About</Nav.Link>
                        <Nav.Link href={useLocation().pathname} bsPrefix='nav-element'>Tutorial</Nav.Link>
                        <Nav.Link href="https://github.com/MLH-Fellowship/PrepHR" bsPrefix='nav-element'>GitHub</Nav.Link>
                        <Nav.Link href="https://forms.gle/P3uf8YT59nVWfcCF7" bsPrefix='nav-element'>Feedback</Nav.Link>
                    </Nav>
                    <NavDropdown.Divider />
                    <Nav>
                        {(showSignUp == 1) ?
                            (<>
                                <Nav.Link bsPrefix='nav-element' href={allPaths._afterLoginPagePath}>Login</Nav.Link>
                                <Nav.Link eventKey={2} bsPrefix='nav-element' href={allPaths._afterLoginPagePath}>SignUp</Nav.Link></>) :
                            (<Nav.Link bsPrefix='nav-element' href={allPaths._resultsLoginPagePath}>Ridham Bhat</Nav.Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>);
}

export default NavBar;