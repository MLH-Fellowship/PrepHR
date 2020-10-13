import React from "react";
import BarChart from "../components/BarChart/barchart";
import NavBar from '../components/NavBar/navbar';
import Footer from '../components/Footer/footer';
import { Container, Row, Col } from 'react-bootstrap';
import goodjob from '../assets/images/goodjob.png'
import * as allPaths from '../constants/paths';
import { Link } from 'react-router-dom';


const ResultsPage = () => {

    return (
        <div>
            <NavBar number={0} />
            <Container>
                <div className='small-separation'></div>
                <Row>
                    <div className='heading-text'>Here are your results based on our calculation! (out of 100)</div>
                    <BarChart />
                    <h2 style={{ color: '#32C766', fontFamily: 'Montserrat-Medium' }}>Remarks</h2>
                    <p style={{ fontFamily: 'Montserrat-Medium' }}>Hmmm.. That’s awesome!
                    You’re either a great candidate, or you have improved significantly.
                    There’s always a long way to go however. All the best!
                    </p>
                    <Col><img style={{ display: 'block', margin: 'auto' }} src={goodjob} /></Col>
                </Row>
                <div className='small-separation'></div>
                <Row>
                    <Link to={allPaths._afterLoginPagePath} style={{ padding: '0px' }}><a href="" className='button-global-style'>Save Result and Return Home</a></Link>
                </Row>
            </Container>
            <div className='very-small-separation'></div>
            <Footer />
        </div >

    );
}
export default ResultsPage;