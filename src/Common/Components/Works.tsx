import React, { useState } from 'react';

//import images
import works1 from "../../assets/images/works/1.jpg";
import works2 from "../../assets/images/works/2.jpg";
import works3 from "../../assets/images/works/3.jpg";
import works4 from "../../assets/images/works/4.jpg";
import works5 from "../../assets/images/works/5.jpg";
import works6 from "../../assets/images/works/6.jpg";
import { Link } from 'react-router-dom';

const Works = () => {

    const workData = [
        {
            "category": "webdesign wordpress",
            "imageSrc": works1,
            "alt": "work-img",
            "title": "Project Title"
        },
        {
            "category": "WORK webdesign seo",
            "imageSrc": works2,
            "alt": "work-img",
            "title": "Project Title"
        },
        {
            "category": "seo wordpress",
            "imageSrc": works3,
            "alt": "work-img",
            "title": "Project Title"
        },
        {
            "category": "wordpress WORK webdesign",
            "imageSrc": works4,
            "alt": "work-img",
            "title": "Project Title"
        },
        {
            "category": "seo webdesign",
            "imageSrc": works5,
            "alt": "work-img",
            "title": "Project Title"
        },
        {
            "category": "devlopment webdesign",
            "imageSrc": works6,
            "alt": "work-img",
            "title": "Project Title"
        }
    ];

    const [filter, setFilter] = useState("all");

    const handleFilter = (value: any) => {
        setFilter(value);
    };

    return (
        <>
            <section className="section text-center" id="portfolio">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Our <span className="fw-bold">Works</span></h2>
                                <p className="text-muted mx-auto section-subtitle mt-3">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 ">
                        <ul className="col list-unstyled list-inline mb-0 text-uppercase work_menu" id="menu-filter">
                            <li className="list-inline-item">
                                <Link to="#" onClick={() => handleFilter("all")} className={filter === "all" ? "active" : ""}>All</Link></li>
                            <li className="list-inline-item">
                                <Link to="#" onClick={() => handleFilter("seo")} className={filter === "seo" ? "active" : ""} >Seo</Link></li>
                            <li className="list-inline-item">
                                <Link to="#" onClick={() => handleFilter("webdesign")} className={filter === "webdesign" ? "active" : ""} >Webdesign</Link></li>
                            <li className="list-inline-item">
                                <Link to="#" onClick={() => handleFilter("WORK")} className={filter === "WORK" ? "active" : ""} >WORK</Link></li>
                            <li className="list-inline-item">
                                <Link to="#" onClick={() => handleFilter("wordpress")} className={filter === "wordpress" ? "active" : ""} >Wordpress</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-4 work-filter">

                        {workData.filter(item => filter === "all" || item.category.includes(filter)).map((item, index) => (
                            <div key={index} className="col-lg-4 work_item">
                                <a href={item.imageSrc} className="img-zoom">
                                    <div className="work_box">
                                        <div className="work_img">
                                            <img src={item.imageSrc} className="img-fluid mx-auto d-block rounded" alt={item.alt} />
                                        </div>
                                        <div className="work_detail">
                                            <p className="mb-2">{item.category}</p>
                                            <h4 className="mb-0">{item.title}</h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
};

export default Works;
