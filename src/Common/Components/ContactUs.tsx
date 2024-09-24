import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <>
            <section className="section" id="contact">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h2><span className="fw-bold">Contact</span> Us</h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={4}>
                            <div className="text-center">
                                <div>
                                    <i className="mbri-mobile2 text-custom h1"></i>
                                </div>
                                <div className="mt-3">
                                    <h5 className="mb-0 contact_detail-title fw-bold">Call Us On</h5>
                                    <p className="text-muted">+985 123 7856</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="text-center">
                                <div>
                                    <i className="mbri-letter text-custom h1"></i>
                                </div>
                                <div className="mt-3">
                                    <h5 className="mb-0 contact_detail-title fw-bold">Email Us At</h5>
                                    <p className="text-muted">Website.Kerri@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="text-center">
                                <div>
                                    <i className="mbri-pin text-custom h1"></i>
                                </div>
                                <div className="mt-3">
                                    <h5 className="mb-0 contact_detail-title fw-bold">Visit Office</h5>
                                    <p className="text-muted">202, Grasselli Street , Conway.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col lg={12}>
                            <div className="form-kerri contact_form">
                                <div id="message"></div>
                                <Form method="post" action="php/contact.php" name="contact-form" id="working_form">
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group className="mt-2">
                                                <Form.Control name="name" id="name" type="text" placeholder="Your name..." required />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="mt-2">
                                                <Form.Control name="email" id="email" type="email" placeholder="Your email..." required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Form.Group className="mt-2">
                                            <Form.Control type="text" id="subject" placeholder="Your Subject.." required />
                                        </Form.Group>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="mt-2">
                                                <Form.Control name="comments" id="comments" as="textarea" rows={4} placeholder="Your message..." required />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12} className="text-end mt-2">
                                            <Button type="submit" id="submit" className="submitBnt btn btn-custom">Send Massage</Button>
                                            <div id="simple-msg"></div>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ContactUs;
