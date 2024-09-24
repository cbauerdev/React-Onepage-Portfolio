import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FadeSection from '../../Common/Components/FadeSection';
import { jarallax } from "jarallax";
import "jarallax/dist/jarallax.css";

//import images
import headerBg from "../../assets/images/header-bg.jpg";

const Section = () => {

    useEffect(() => {
        jarallax(document.querySelectorAll(".jarallax"), {
            speed: 0.2,
        });
    }, []);

    return (
        <>
            <section className="section h-100vh align-items-center d-flex clip-home jarallax"
                data-jarallax='{"speed": 0.2}'
                style={{ backgroundImage: `url(${headerBg})` }}
                id="home">
                <div className="bg-overlay"></div>
                <Container className="z-index">
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center header-content mx-auto">
                                <h4 className="text-white first-title mb-4">Welcome</h4>
                                <h1 className="header-name text-white text-capitalize mb-0">I'M {" "}
                                    <FadeSection />
                                </h1>
                                <p className="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                                <div className="mt-4 pt-2">
                                    <Link to="#" className="btn btn-outline-custom btn-round">Download Cv</Link>
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
