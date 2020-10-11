import React from 'react';
import './navbar.css';
import logo from '../../assets/icons/logo.svg'
import * as allPaths from '../../constants/paths'

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-img'>
                <a href={allPaths._beforeLoginPagePath}><img src={logo} width='120' height='40' /></a>
            </div>
            <div className='nav-left-container'>
                <a href="">About</a>
                <a href="">Tutorial</a>
                <a href="">GitHub</a>
                <a href="">Feedback</a>
            </div>
            <div className='nav-right-container'>
                <a href="">Login</a>
                <a href="">Sign Up</a>
            </div>
        </div>
    );
}

export default NavBar;