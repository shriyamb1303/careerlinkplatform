import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Threeprops = () => {
    return (
        <div className='px-5 mt-5' style={{ marginBottom: '3rem' }} >
            <Container fluid>
                <Row className="d-flex justify-content-between">
                    <Col className="align-items-center justify-content-center me-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{
                            height: '156px', width: '376px', padding: '24px 20px',
                            // backgroundColor: '#F2F7FF',
                            backgroundColor: '#e3ddcc',
                            borderRadius: '16px'
                        }}>
                            <h3 className='mt-3'
                                style={{
                                    fontWeight: '800',
                                    fontSize: '3rem',
                                    // color: '#0b748c'
                                    color: 'grey'
                                }}
                            >3x</h3>
                            <p className='mt-3'>faster candidate submissions</p>
                        </div>
                    </Col>
                    <Col className="align-items-center justify-content-center me-1">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '156px', width: '376px', padding: '24px 20px', backgroundColor: '#e3ddcc', borderRadius: '16px' }}>
                            <h3 className='mt-3'
                                style={{
                                    fontWeight: '800',
                                    fontSize: '3rem',
                                    // color: '#0b748c'
                                    color: 'grey'
                                }}
                            >30%</h3>
                            <p className='mt-3'>more candidate placements</p>
                        </div>
                    </Col>
                    <Col className="align-items-center justify-content-center">
                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '156px', width: '376px', padding: '24px 20px', backgroundColor: '#e3ddcc', borderRadius: '16px', }}>
                            <h3 className='mt-3'
                                style={{
                                    fontWeight: '800',
                                    fontSize: '3rem',
                                    // color: '#0b748c'
                                    color: 'grey'
                                }}
                            >100%</h3>
                            <p className='mt-3'>client satisfaction</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Threeprops
