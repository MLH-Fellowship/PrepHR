import React from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import footericon from '../../assets/icons/footericon.svg';
import logo from '../../assets/icons/logo.svg'

const Footer = () => {
    return (
        <Container fluid>
            <Row className='footer-container'>
                <div style={{ padding: '0px 50px 0px 50px' }}><img src={footericon} width='30' height='30' /></div>
                <Col style={{ textAlign: 'center' }}>PrepHR ©2020</Col>
                <Col style={{ textAlign: 'center' }}>About</Col>
                <Col style={{ textAlign: 'center' }}>User Agreement</Col>
                <Col style={{ textAlign: 'center' }}>Privacy Policy</Col>
                <Col style={{ textAlign: 'center' }}>Copyright Policy</Col>
                <Col style={{ textAlign: 'center' }}>Community Guidelines</Col>
                <Col style={{ textAlign: 'center' }}>Contributors</Col>
            </Row>
        </Container>
    );
}

export default Footer;