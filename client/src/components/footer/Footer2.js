import React from 'react'
import './footertwo.css'
import { Container, Row, Col } from 'react-bootstrap';

const Footer2 = () => {
    return (
        <div className='f2-main'>
            <Container fluid>
                <Row>
                    <Col className='f2-col'>
                        <h4>Jobs by location</h4>
                        <p>Startup Jobs in India</p>
                        <p>Startup Jobs in Bangalore</p>
                        <p>Startup Jobs in Delhi / Gurgaon / Noida</p>
                        <p>Startup Jobs in Pune</p>
                        <p>Startup Jobs in Hyderabad</p>
                    </Col>
                    <Col className='f2-col'>
                        <h4>Technology Jobs</h4>
                        <p>Android Developer Jobs</p>
                        <p>iOS Development Jobs</p>
                        <p>Frontend Developer Jobs</p>
                        <p>Backend Developer Jobs</p>
                        <p>DevOps Jobs</p>
                    </Col>
                    <Col className='f2-col'>
                        <h4>Business & Design Jobs</h4>
                        <p>Marketing and Sales Jobs</p>
                        <p>Digital Marketing Jobs</p>
                        <p>UX and Graphic Design Jobs</p>
                        <p>Product Manager Jobs</p>
                        <p>Product Based Company Jobs</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer2
