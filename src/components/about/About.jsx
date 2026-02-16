import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';
import aboutImage from "../../assets/about.jpg"
const About = () => {

    const navigate = useNavigate()

    return (
        <div className="about section-padding" id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-image-parent">
                            <img src={aboutImage} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="about-data-parent">
                            <h3 className='sub-heading'>About</h3>
                            <h1 className="main-heading">Looking for the best Debt Collection Services in Dubai? Your search ends here.</h1>
                            <p className="description">
                                We provide professional debt collection services for businesses of all sizes.
                                Our team works closely with you to recover outstanding payments efficiently and fairly.
                                Trust us to handle your receivables with care, professionalism, and integrity.,
                            </p>
                            <button className="all-btn" onClick={() => navigate("/contact")}>
                                BOOK A FREE CONSULTATION'
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;