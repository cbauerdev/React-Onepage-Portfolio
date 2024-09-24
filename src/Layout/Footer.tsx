import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    //Back to Top
    const [isVisible, setIsVisible] = useState(false);
    const [isSwitchToggle, setIsSwitchToggle] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    //Switcher

    const setTheme = (color: any) => {
        const colorTheme: any = document.getElementById("colorTheme");
        colorTheme.href =
            "public/assets/css/color/" + color + ".css";
        toggleSwitcher();
    };

    const toggleSwitcher = () => {
        setIsSwitchToggle(!isSwitchToggle);
    };

    return (
        <>
            <footer className="footer bg-light" style={{ position: "relative" }}>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={12}>
                            <div className="text-center text-white footer-alt">
                                <ul className="list-unstyled list-inline mb-0">
                                    <li className="list-inline-item"><Link to="#"><i className="mdi mdi-facebook"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#"><i className="mdi mdi-linkedin"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#"><i className="mdi mdi-pinterest"></i></Link></li>
                                    <li className="list-inline-item"><Link to="#"><i className="mdi mdi-twitter"></i></Link></li>
                                </ul>
                                <p className="copyright_content mb-0 mt-3">
                                    {new Date().getFullYear()}{" "}
                                    &copy; Christoph Bauer
                                    <Link className="copyright_content ms-1" target="_blank" to="https://cbauer.eu">| Design by CBAUER.EU</Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <Link to="#"
                style={{ display: isVisible ? "inline" : "none" }}
                className="back_top" onClick={scrollToTop}>
                <i className="mdi mdi-chevron-up"> </i>
            </Link>

            <div id="color-switcher"
                style={{ left: isSwitchToggle ? "0px" : "-189px" }}
            >
                <div>
                    <h3 className="fw-bold text-center">Select your color</h3>
                    <ul className="pattern">
                        <li>
                            <Link className="color1" to="#" onClick={() => setTheme("default")}></Link>
                        </li>
                        <li>
                            <Link className="color2" to="#" onClick={() => setTheme("blue")}></Link>
                        </li>
                        <li>
                            <Link className="color3 active" to="#" onClick={() => setTheme("green")}></Link>
                        </li>
                        <li>
                            <Link className="color4" to="#" onClick={() => setTheme("purple")}></Link>
                        </li>
                        <li>
                            <Link className="color5" to="#" onClick={() => setTheme("skyblue")}></Link>
                        </li>
                        <li>
                            <Link className="color6" to="#" onClick={() => setTheme("yellow")}></Link>
                        </li>
                    </ul>
                </div>
                <div className="bottom">
                    <Link to="#" onClick={toggleSwitcher} className="settings rounded-right"><i className="mdi mdi-settings mdi-spin"></i></Link>
                </div>

            </div>
        </>
    );
};

export default Footer;
