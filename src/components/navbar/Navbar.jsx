import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from "../../assets/officialLogo.png";
import { HashLink } from 'react-router-hash-link';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg" id='home' style={{ display: "flex", flexDirection: "column" }}>

                <div className="container" style={{ paddingInline: "0px" }}>
                    <div className="navbar-logo">
                        <a className="nav-link" href="/#home">
                            <img src={logo} alt="Logo" />
                        </a>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={handleMenuClick} aria-controls="navbarNav" aria-expanded={menuOpen ? 'true' : 'false'} aria-label="Toggle navigation">
                        <FaBars />
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#home">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#about">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#whoAreWe">Who Are We</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#services">Services</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#faq">FAQ</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" smooth to="/#contact-me">Contact</HashLink>
                            </li>
                        </ul>
                        {/* <div className="navbar-icons">
                            <button className="book-free-counsultaion-btn"> <a href="/#contact-me"> Book Free Consultation </a></button>
                        </div> */}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
