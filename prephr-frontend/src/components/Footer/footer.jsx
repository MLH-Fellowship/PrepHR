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
                <a className="col" style={{ textAlign: 'center' }} href="">PrepHR ©2020</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/blob/main/README.md">About</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/blob/main/LICENSE">User Agreement</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/blob/main/LICENSE">Privacy Policy</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/blob/main/LICENSE">Copyright Policy</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/blob/main/LICENSE">Community Guidelines</a>
                <a className="col" style={{ textAlign: 'center' }} href="https://github.com/MLH-Fellowship/PrepHR/graphs/contributors">Contributors</a>
            </Row>
        </Container>
    );
}

export default Footer;