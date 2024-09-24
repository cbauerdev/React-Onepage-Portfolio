import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeSection from '../../Common/Components/FadeSection';
import Partical from '../../Common/Components/Partical';


const Section = () => {
    return (
        <>
            <section className="section header-bg-img h-100vh align-items-center d-flex" id="home">
                <div className="bg-overlay"></div>
                <Partical />
                 <Container className="z-index">
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center header-content mx-auto">
                                <h4 className="text-white first-title mb-4">Hello</h4>
                                <h1 className="header-name text-white text-capitalize mb-0">I'm {" "}
                                    <FadeSection />
                                </h1>
                                <p className="text-white mx-auto header-desc mt-4">Crafting Web Applications, Websites, and Everything Digital.</p>
                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-outline-custom btn-round">Download CV</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="scroll_down">
                    <a href="#about" className="scroll">
                        <i className="text-white"></i>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Section;
