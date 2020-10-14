import React from 'react';
import './bodyheader.css';
import * as allPaths from '../../constants/paths';
import hrbig from '../../assets/icons/hrbig.svg';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const BodyHeader = (props) => {
    let cond_subtext = props.subtext;
    return (
        <div className='body-header-container'>
            <div className='header-title centerx'>PrepHR</div>
            <div className='header-subtitle centerx'>{props.subtitle}</div>
            {cond_subtext != 0 ? (
                <Container fluid className='sub-contain'>
                    <Row>
                        <Col xs={6}>
                            <div className='header-button'>
                                <Link to={allPaths._afterLoginPagePath}><a href="" className='button-style'>
                                    Get Started
                        </a></Link>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='header-subtext'>
                                <a href="" className='subtext-style'>
                                    Take the tutorial now
                            </a>
                                {/* <i className="fa fa-chevron-right" aria-hidden="true" style={{ color: '#32C766' }}></i> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            ) : (<div></div>)}
            <a href="" className='large-hr-icon centery'><img src={hrbig} className='hr-img' /></a>
        </div>
    );
}

export default BodyHeader;