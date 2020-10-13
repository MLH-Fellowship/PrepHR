import React from 'react';
import './bodyheader.css';
import * as allPaths from '../../constants/paths';
import hrbig from '../../assets/icons/hrbig.svg';
import { Link } from 'react-router-dom';

const BodyHeader = (props) => {
    let cond_subtext = props.subtext;
    return (
        <div className='body-header-container'>
            <div className='header-title centerx'>PrepHR</div>
            <div className='header-subtitle centerxy'>{props.subtitle}</div>
            {cond_subtext != 0 ? (
                <div>
                    <div className='header-button'>
                        <Link to={allPaths._afterLoginPagePath}><a href="" className='button-style'>
                            Get Started
                        </a></Link>
                    </div>
                    <div className='header-subtext'>
                        <a href="" className='subtext-style'>
                            Take the tutorial now
                </a>
                        <i className="fa fa-chevron-right" aria-hidden="true" style={{ color: '#32C766' }}></i>
                    </div>
                </div>) : (<div></div>)}
            <a href="" className='large-hr-icon centery'><img src={hrbig} width='300' height='300' /></a>
        </div>
    );
}

export default BodyHeader;