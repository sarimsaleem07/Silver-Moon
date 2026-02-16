import React from 'react';
import Logo from '../../assets/officialLogo.png';
import { FaInstagram, FaLinkedin, FaSquareFacebook, FaSquareWhatsapp } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <div className="footer-section">
                                <h4 className='footer-headings' >Contact Us</h4>
                                <h6 className='footer-subheading'>Head Office</h6>
                                <p><a href="https://www.google.com/maps?q=24.998091,55.170963" target='blank' className='footer-subheading'>Arjumand Building Suite 493 Green Community Village - Dubai Investment Park First - Dubai</a></p>

                                <h6 className='footer-subheading'>Phone Number</h6>
                                <p><a href="tel:+07777966289" className='footer-subheading' >T: 9999 999 999</a></p>
                                <h6 className='footer-subheading' >Email Address</h6>
                                <p><a href="mailto:Info@silvermoondebtcollection.com" className='footer-subheading'>Info@silvermoondebtcollection.com</a></p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-4">
                            <iframe
                                src="https://www.google.com/maps?q=24.998091,55.170963&hl=es;z=14&output=embed" width="85%"
                                height="270"
                                style={{ border: 0, marginBlock: "15px" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <div className="footer-section">
                                <h4 className='footer-heading'>Menu</h4>
                                <ul className='list' style={{ listStyle: "none", padding: "0" }}>
                                    <li><a className='footer-data' href="/#home"> Home </a></li>
                                    <li><a className='footer-data' href="/#services">My Services</a></li>
                                    <li><a className='footer-data' href="/#about-me">About Us</a></li>
                                    <li><a className='footer-data' href="/#faq">FAQ</a></li>
                                    <li><a className='footer-data' href="/#contact-me">Contact Me</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-2">
                            <div className="footer-section">
                                <h4 className='footer-heading'>Follow Us</h4>
                                <div className="footer-icons">
                                    <a href="https://www.instagram.com/cave_counselling/?igsh=d2wyZHltcXZwcGZu#" className="icon linkedin"> <i><FaInstagram size={30} /></i></a>
                                    <a href="https://www.linkedin.com/in/shama-iqbal-68682430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="icon linkedin"> <i><FaLinkedin size={30} /></i></a>
                                    <a href="https://www.instagram.com/cave_counselling/?igsh=d2wyZHltcXZwcGZu#" className="icon linkedin"> <i> <FaSquareWhatsapp size={30} /></i></a>
                                    <a href="https://www.linkedin.com/in/shama-iqbal-68682430a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="icon linkedin"> <i><FaSquareFacebook size={30} /></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <hr className='footer-hr' />
            <div className="footer-content">
                <div className="container">
                    <div className="sub-footer-content">
                        <div className="footer-text">
                            <p>© {new Date().getFullYear()} Silver Moon. All Rights Reserved.</p>
                        </div>
                        <div className="footer-logo">
                            <img src={Logo} alt="Cave Consulting Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer