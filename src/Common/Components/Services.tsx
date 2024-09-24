import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Services = () => {
    const servicesData = [
        {
            icon: 'mbri-growing-chart',
            title: 'Graphic Design',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            icon: 'mbri-hot-cup',
            title: 'Unlimited Color',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            icon: 'mbri-upload',
            title: 'Media Marketing',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            icon: 'mbri-layers',
            title: 'Unlimited Wifi',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            icon: 'mbri-website-theme',
            title: 'Responsive Design',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        },
        {
            icon: 'mbri-edit',
            title: 'Easy to customize',
            description: 'There are many variations of passages of but the majority have suffered alteration in some form.'
        }
    ];

    return (
        <>
            <section className="section bg-light" id="services">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>Our <span className="fw-bold">Services</span></h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {servicesData.slice(0, 3).map((service: any, index: any) => (
                            <Col lg={4} key={index}>
                                <div className="text-center services-boxes rounded p-4 mt-4">
                                    <div className="services-boxes-icon">
                                        <i className={`${service.icon} text-custom display-4`}></i>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-0">{service.title}</h5>
                                        <div className="services-title-border"></div>
                                        <p className="text-muted mt-3">{service.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                    <Row>
                        {servicesData.slice(3, 6).map((service, index) => (
                            <Col lg={4} key={index}>
                                <div className="text-center services-boxes rounded p-4 mt-4">
                                    <div className="services-boxes-icon">
                                        <i className={`${service.icon} text-custom display-4`}></i>
                                    </div>
                                    <div className="mt-4">
                                        <h5 className="mb-0">{service.title}</h5>
                                        <div className="services-title-border"></div>
                                        <p className="text-muted mt-3">{service.description}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;
