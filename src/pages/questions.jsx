import React from 'react';
import Webcam from 'react-webcam';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from '../components/Footer/footer';
import NavBar from "../components/NavBar/navbar";

const QuestionsPage = () => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);

    const handleStartCaptureClick = React.useCallback(() => {
        setCapturing(true);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
            mimeType: "video/webm"
        });
        mediaRecorderRef.current.addEventListener(
            "dataavailable",
            handleDataAvailable
        );
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = React.useCallback(
        ({ data }) => {
            if (data.size > 0) {
                setRecordedChunks((prev) => prev.concat(data));
            }
        },
        [setRecordedChunks]
    );

    const handleStopCaptureClick = React.useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);

    const handleDownload = React.useCallback(() => {
        if (recordedChunks.length) {
            const blob = new Blob(recordedChunks, {
                type: "video/webm"
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = "react-webcam-stream-capture.webm";
            a.click();
            window.URL.revokeObjectURL(url);
            setRecordedChunks([]);
        }
    }, [recordedChunks]);

    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <div className='heading-text'>Question 1</div>
                        <h5 style={{ fontFamily: 'Montserrat-Medium' }}>
                            Tell me something about yourself. Also how do you see yourself pogressing 5 years from now?
                        </h5>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Webcam audio={true} ref={webcamRef} width='100%' />
                    </Col>
                </Row>
                <div className='very-small-separation'></div>
                <Row>
                    <Col>
                        {capturing ? (
                            <button onClick={handleStopCaptureClick} className='button-global-style col'>Stop Capture</button>
                        ) : (
                                <button onClick={handleStartCaptureClick} className='button-global-style col'>Start Capture</button>
                            )}
                    </Col>
                    <Col>{recordedChunks.length > 0 && (
                        <button onClick={handleDownload} className='button-global-style col'>Download</button>
                    )}
                    </Col>
                    <Col>
                        {recordedChunks.length > 0 && (
                            <button className='button-global-style col'>Submit</button>
                        )}
                    </Col>

                </Row>
            </Container>
            <div className='very-small-separation'></div>
            <Footer />
        </>
    );

}
export default QuestionsPage;