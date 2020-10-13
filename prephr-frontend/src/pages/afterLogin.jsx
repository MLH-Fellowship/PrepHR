import React from "react";
import BodyHeader from "../components/BodyHeader/bodyheader";
import NavBar from "../components/NavBar/navbar";
import { Container, Row, Col } from 'react-bootstrap';
import interview3 from '../assets/images/interview3.png'
import Footer from "../components/Footer/footer";

const AfterLoginPage = () => {
    return (
        <div>
            <NavBar />
            <BodyHeader />
            <Container fluid>
                <div className='small-separation'></div>
                <Row style={{ marginLeft: '50px' }}>
                    <Col md={6} sm={12} style={{ position: 'relative' }}>
                        <div style={{ position: 'relative' }} className='centerxy'>
                            <div className='heading-text'>Starting your HR Interview...</div>
                            <h5>
                                You can now being your interview. Here are some instructions to keep in mind before you begin :
                                <br />
                                <br />
                                a) Starting this interview will open up a window, where you’ll eventually face 3 questions of different categories. For each question you’ll have to record a video (make sure you accept all permissions for the webcam), and then submit it.
                                <br />
                                <br />
                                b) To ensure that the recorded video is clean and noise free, make sure you sit in a disturbance free environment with proper lighting.
                                <br />
                                <br />
                                c) At the end of each question, after you submit, you’ll be redirected to the next question. Ensure that the submitted video length for each question is less than 5 mins.
                                <br />
                                <br />
                                d) After all the questions are over, you’ll need to wait for a few seconds to see your scorecard. This will have your statistics with respect to all the parameters that are judged in an HR interview, such as communication, clarity, posture, expression etc.
                                <br />
                                <br />
                                e) Thereafter, you will be asked to rate the experience. Also ocassionally you can might need to fill up an optional feedback for us to know about how we can assist you in a better way and improve ourselves.
                                <br />
                                <br />
                                We’re excited to have you onboard. Let’s get started!
                            </h5>
                            <br />
                            <br />
                            <a href="" className='button-global-style'>
                                Start Your HR Interview
                            </a>
                        </div>
                    </Col>
                    <Col md={6} sm={12}>
                        <img src={interview3} />
                    </Col>
                </Row>
                <div className='small-separation'></div>
            </Container>
            <Footer />
        </div>
    );
}
export default AfterLoginPage;