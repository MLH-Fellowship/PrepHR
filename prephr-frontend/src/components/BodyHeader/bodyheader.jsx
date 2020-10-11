import React from 'react';
import './bodyheader.css';
import * as allPaths from '../../constants/paths';
import hrbig from '../../assets/icons/hrbig.svg';

const BodyHeader = () => {
    return (
        <div className='body-header-container'>
            <div className='header-title centerx'>PrepHR</div>
            <div className='header-subtitle centerxy'>Where Preparation Meets Expectations</div>
            <div className='header-button'>
                <a href="" className='button-style'>
                    Get Started
                </a>
            </div>
            <div className='header-subtext'>
                <a href="" className='subtext-style'>
                    Take the tutorial now
                </a>
                <i className="fa fa-chevron-right" aria-hidden="true" style={{ color: '#32C766' }}></i>
            </div>
            <a href={allPaths._beforeLoginPagePath} className='large-hr-icon centery'><img src={hrbig} width='300' height='300' /></a>
        </div>
    );
}

export default BodyHeader;