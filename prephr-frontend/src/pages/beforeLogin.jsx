import React from "react";
import BodyHeader from "../components/BodyHeader/bodyheader";
import NavBar from "../components/NavBar/navbar";
import { Container, Row, Col } from 'react-bootstrap';
import interview1 from '../assets/images/interview1.png'
import interview2 from '../assets/images/interview2.png'
import Footer from "../components/Footer/footer";

const BeforeLoginPage = () => {
    return (
        <div>
            <NavBar />
            <BodyHeader />
            <Container fluid>
                <div className='small-separation'></div>
                <Row>
                    <Col md={6} sm={12} style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute' }} className='centerxy'>
                            <div className='heading-text'>Prepare for HR Interviews</div>
                            <h5>
                                Prepare before hand and have a proper idea of your strengths and weaknesses.
                                This website uses facial and voice recognition features, to asses the various parameters such as confidence, expression, clarity, posture and understanding.
                            </h5>
                            <br />
                            <a href="" className='button-global-style'>
                                Begin Practising
                            </a>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={interview1} />
                    </Col>
                </Row>
                <div className='small-separation'></div>
                <Row>
                    <Col md={6} sm={12}>
                        <img src={interview2} />
                    </Col>
                    <Col md={6} sm={12} style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute' }} className='centerxy'>
                            <div className='heading-text'>It’s OpenSource and free</div>
                            <h5>
                                Most of our features are free.
                                You can take infinite trails, receive results, observe your progress, give feedback for free.
                                If you’re a developer, and wish to contribute, you are welcome!
                            </h5>
                            <br />
                            <a href="" className='button-global-style'>
                                Contribute to PrepHR
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className='small-separation'></div>
            </Container>
            <Footer />
        </div>
    );
}
export default BeforeLoginPage;