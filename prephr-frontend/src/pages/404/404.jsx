import React from "react";
import './404.css';
import _404 from '../../assets/icons/_404.svg';
import * as allPaths from '../../constants/paths';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div class="container centerxy" style={{ position: 'absolute' }}>
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <img src={_404}></img>
                </div>
                <div class="col-md-6 align-self-center">
                    <h1>404</h1>
                    <h2>UH OH! You're lost.</h2>
                    <p>The page you are looking for does not exist.
                    How you got here is a mystery. But you can click the button below
                    to go back to the homepage.
                    </p>
                    <Link to={allPaths._afterLoginPagePath} style={{ padding: '0px' }}><a class="btn green" href="">HOME</a></Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;