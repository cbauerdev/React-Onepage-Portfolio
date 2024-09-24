import React from 'react';

//import images
import about from "../../assets/images/about.jpg";
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <section className="section" id="about">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6}>
                            <div className="mt-3">
                                <img src={about} alt="" className="img-fluid mx-auto d-block img-thumbnail" />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="mt-3">
                                <h2><span className="fw-bold">About</span> Me</h2>
                                <h4 className="mt-4">Hello! <span className="text-custom fw-bold">I'M Kerri Deo.</span></h4>
                                <p className="text-muted mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                                <p className="text-muted mt-2">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <p className="text-muted mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                <div>
                                    <ul className="mb-0 about-social list-inline mt-4">
                                        <li className="list-inline-item">
                                            <Link to="#"><i className="mdi mdi-dribbble"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#"><i className="mdi mdi-facebook"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#"><i className="mdi mdi-linkedin"></i></Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#"><i className="mdi mdi-twitter"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default About;
