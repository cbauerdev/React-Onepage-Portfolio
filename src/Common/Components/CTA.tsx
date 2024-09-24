import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <>
            <section className="section">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="text-center">
                                <h2 className="fw-bold">I Am Available For Freelancer.</h2>
                            </div>
                            <div className="text-center mt-4">
                                <Link to="#" className="btn btn-custom">Hire Me!</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CTA;
