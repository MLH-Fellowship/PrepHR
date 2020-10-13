import React from "react";
import BodyHeader from "../components/BodyHeader/bodyheader";
import NavBar from "../components/NavBar/navbar";
import { Container, Row, Col } from 'react-bootstrap';
import interview3 from '../assets/images/interview3.png'
import Footer from "../components/Footer/footer";
import LineChart from "../components/LineChart/linechart";
import PerformanceCards from "../components/Performace Cards/performacecards";

const DashboardPage = () => {
    return (
        <div>
            <NavBar number={0} />
            <BodyHeader subtitle="Ridham's Dashboard" subtext={0} />
            <Container>
                <div className='very-small-separation'></div>
                <div className='heading-text'>Your Past performances</div>
                <LineChart />
                <div className='small-separation'></div>
                <Row>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                    <Col md={6} sm={12}>
                        <PerformanceCards />
                    </Col>
                </Row>
                <div className='small-separation'></div>
            </Container>
            <Footer />
        </div>
    );
}
export default DashboardPage;