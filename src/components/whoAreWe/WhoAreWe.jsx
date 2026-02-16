import React from 'react'
import "./WhoAreWe.css"
import whoAreWe from "../../assets/about.jpg"

const WhoAreWe = () => {

    return (
        <div className="whoAreWe section-padding" id='whoAreWe'>
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whoAreWe-data-parent">
                            <h3 className='sub-heading'>Who Are We</h3>
                            <h1 className="main-heading">We are Silver Moon Debt Collection, a professional Dubai-based agency.</h1>
                            <ul className="whoAreWe-description">
                                <li>We are a professional Dubai-based debt collection agency.</li>
                                <li>We operate on a simple 20% commission model — No recovery, No fee.</li>
                                <li>Our experienced agents speak English, Arabic & Urdu to support clients worldwide.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whoAreWe-image-parent">
                            {/* <img src={whoAreWe} alt="" /> */}
                            <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="600" height="400" rx="20" fill="url(#gradient)" />
                                <circle cx="450" cy="80" r="60" fill="#D4AF37" fill-opacity="0.1" />
                                <circle cx="100" cy="320" r="80" fill="#1A2B3C" fill-opacity="0.1" />

                                <g filter="url(#shadow)">
                                    <path d="M300 120L400 160V240C400 280 350 320 300 340C250 320 200 280 200 240V160L300 120Z" fill="white" stroke="#1A2B3C" stroke-width="2" />
                                    <path d="M300 140L380 175V235C380 265 340 295 300 310C260 295 220 265 220 235V175L300 140Z" fill="url(#gradient2)" />

                                    <circle cx="300" cy="200" r="30" fill="white" fill-opacity="0.9" />
                                    <path d="M320 190C330 195 335 205 330 215C325 225 315 225 305 220C315 215 320 205 320 190Z" fill="#C0C0C0" />

                                    <g transform="translate(250, 220)">
                                        <circle cx="0" cy="0" r="15" fill="#D4AF37" fill-opacity="0.2" />
                                        <text x="-7" y="5" font-family="Arial" font-size="14" fill="#D4AF37">20%</text>
                                    </g>

                                    <g transform="translate(320, 250)">
                                        <circle cx="0" cy="0" r="15" fill="#1A2B3C" fill-opacity="0.1" />
                                        <text x="-15" y="5" font-family="Arial" font-size="12" fill="#1A2B3C">EN/AR/UR</text>
                                    </g>
                                </g>

                                <g transform="translate(200, 280)">
                                    <circle cx="0" cy="0" r="25" fill="#1A2B3C" fill-opacity="0.2" />
                                    <circle cx="5" cy="-5" r="8" fill="#D4AF37" />
                                    <rect x="-10" y="10" width="20" height="25" fill="#C0C0C0" rx="3" />
                                </g>

                                <g transform="translate(380, 280)">
                                    <circle cx="0" cy="0" r="25" fill="#1A2B3C" fill-opacity="0.2" />
                                    <circle cx="5" cy="-5" r="8" fill="#D4AF37" />
                                    <rect x="-10" y="10" width="20" height="25" fill="#C0C0C0" rx="3" />
                                </g>

                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stop-color="#1A2B3C" stop-opacity="0.05" />
                                        <stop offset="100%" stop-color="#C0C0C0" stop-opacity="0.1" />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="250" y1="140" x2="350" y2="300">
                                        <stop offset="0%" stop-color="#1A2B3C" stop-opacity="0.1" />
                                        <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.1" />
                                    </linearGradient>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="4" flood-opacity="0.1" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WhoAreWe