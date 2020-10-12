import React from 'react';
import './afterLoginHeader.css';
import * as allPaths from '../../constants/paths';
import hrbig from '../../assets/icons/hrbig.svg';

const afterLoginHeader = () => {
    return (
        <div className='body-header-container'>
            <div className='header-title centerx'>PrepHR</div>
            <div className='header-subtitle centerxy'>Welcome! Let's start with your HR interview now.</div>

        </div>

    );
}

export default afterLoginHeader;