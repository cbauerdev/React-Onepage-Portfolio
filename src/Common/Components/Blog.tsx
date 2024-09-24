import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

//import images
import blog1 from "../../assets/images/blog/blog-1.jpg";
import blog2 from "../../assets/images/blog/blog-2.jpg";
import blog3 from "../../assets/images/blog/blog-3.jpg";

const Blog = () => {
    const blogData = [
        {
            "imageSrc": blog1,
            "title": "There are many variations",
            "date": "11 March 2018",
            "author": "Kerri",
            "description": "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
        },
        {
            "imageSrc": blog2,
            "title": "Contrary to popular belief",
            "date": "18 March 2018",
            "author": "Kerri",
            "description": "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
        },
        {
            "imageSrc": blog3,
            "title": "Lorem Ipsum is not simply",
            "date": "22 March 2018",
            "author": "Kerri",
            "description": "Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies."
        }
    ];
    return (
        <>
            <section className="section bg-light" id="blog">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                            <div className="text-center">
                                <h2>Our <span className="fw-bold">Blog</span></h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        {blogData.map((post, index) => (
                            <Col lg={4} key={index} className="mt-3">
                                <Card className="rounded blog_color p-2">
                                    <div className="img_blog">
                                        <Card.Img src={post.imageSrc} alt="" className="img-fluid rounded mx-auto d-block" />
                                    </div>
                                    <div className="content_blog p-3">
                                        <div>
                                            <Card.Title className="fw-bold mb-0"><a href="#" className="text-white">{post.title}</a></Card.Title>
                                        </div>
                                        <div className="mt-3">
                                            <p className="h6 text-muted date_blog mb-0">{post.date} <a href="#" className="text-custom fw-bold">By {post.author}</a></p>
                                            <p className="mt-3 desc_blog text-muted">{post.description}</p>
                                            <p className="h6 mb-0"><a href="#" className="text-muted fw-bold">Read More...</a></p>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Blog;
