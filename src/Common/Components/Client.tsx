import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

//import images
import testi1 from "../../assets/images/testi/testi-1.jpg";
import testi2 from "../../assets/images/testi/testi-2.jpg";
import testi3 from "../../assets/images/testi/testi-3.jpg";

const Client = () => {
    return (
        <>
           <section className="section bg-light" id="client">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12}>
                        <div className="text-center">
                            <h2>Our <span className="fw-bold">Client</span></h2>
                            <p className="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 pt-4">
                    <Col lg={12}>
                        <Carousel id="owl-demo" className="owl-carousel" indicators={true}>
                            <Carousel.Item interval={1000}>
                                <div className="text-center testi_boxes mx-auto">
                                    <div className="tam_testi_icon text-custom">
                                        <i className="mbri-quote-left"></i>
                                    </div>
                                    <div className="mt-2">
                                        <div className="img_testi">
                                            <img src={testi1} alt="" className="mx-auto img-thumbnail img-fluid rounded-circle" />
                                        </div>
                                        <p className="client_review fst-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                                        <p className="client_name text-center mb-0 mt-4">- Ebony verty, <span className="fw-bold">Envato</span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className="text-center testi_boxes mx-auto">
                                    <div className="tam_testi_icon text-custom">
                                        <i className="mbri-quote-left"></i>
                                    </div>
                                    <div className="mt-2">
                                        <div className="img_testi">
                                            <img src={testi2} alt="" className="mx-auto img-thumbnail img-fluid d-block rounded-circle" />
                                        </div>
                                        <p className="client_review fst-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                                        <p className="client_name text-center mb-0 mt-4">- Ebony verty, <span className="fw-bold">Envato</span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                                <div className="text-center testi_boxes mx-auto">
                                    <div className="tam_testi_icon text-custom">
                                        <i className="mbri-quote-left"></i>
                                    </div>
                                    <div className="mt-2">
                                        <div className="img_testi">
                                            <img src={testi3} alt="" className="mx-auto img-thumbnail img-fluid d-block rounded-circle" />
                                        </div>
                                        <p className="client_review fst-italic mt-4 text-center text-muted">" The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here."</p>
                                        <p className="client_name text-center mb-0 mt-4">- Ebony verty, <span className="fw-bold">Envato</span></p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
};

export default Client;
