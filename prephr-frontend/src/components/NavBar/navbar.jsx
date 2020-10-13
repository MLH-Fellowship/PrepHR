import React from 'react';
import './navbar.css';
import logo from '../../assets/icons/logo.svg'
import * as allPaths from '../../constants/paths'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let showSignUp = 0;
    if (props.number == 1) showSignUp = 1;

    return (
        <div className='nav-container'>
            <div className='nav-img'>
                <a href={allPaths._beforeLoginPagePath}><img src={logo} width='120' height='40' /></a>
            </div>
            <div className='nav-left-container'>
                <a href="https://github.com/MLH-Fellowship/PrepHR/blob/main/README.md">About</a>
                <a href="">Tutorial</a>
                <a href="https://github.com/MLH-Fellowship/PrepHR">GitHub</a>
                <a href="https://forms.gle/P3uf8YT59nVWfcCF7">Feedback</a>
            </div>
            <div className='nav-right-container'>
                {(showSignUp == 1) ? (<><Link to={allPaths._afterLoginPagePath}><a href="">Login</a></Link>
                    <Link to={allPaths._afterLoginPagePath}><a href="">Sign Up</a></Link></>) :
                    (<Link to={allPaths._dashboardPagePath}><a href="">Ridham Bhat</a></Link>)}
            </div>
        </div>
    );
}

export default NavBar;