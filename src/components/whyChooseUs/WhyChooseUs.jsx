import React, { useState } from 'react'
import "./WhyChooseUs.css"
import whyChooseUs from "../../assets/whyChooseUs.jpg"

const WhyChooseUs = () => {

    const [showAll, setShowAll] = useState(false);

    const points = [
        "Engaging a debt collection agency is an important decision, particularly if you value strong client relationships and protecting your brand image.",
        "We are a well-established agency delivering reliable and results-focused debt recovery services tailored to suit your business.",
        "Nationwide Coverage – Providing debt collection services across the UAE.",
        "At Silvermoon Debt Collection, our experienced team recognises these concerns. That’s why our approach to debt recovery is always professional, confidential, and ethically driven.",
        "No Win, No Fee – You only pay when we successfully recover your money. There are no upfront costs, registration charges, or hidden admin fees.",
        "Fully Regulated & Accredited – We operate in full compliance with industry standards and are accredited by leading professional bodies.",
        "International Recovery – We pursue debts in other countries if needed.",
        "Strong Success Rate – Approximately 80% of cases successfully recovered through a fast and efficient process.",
        "Legal Support When Required – We collaborate with solicitors, insolvency practitioners, and law enforcement agencies where further action becomes necessary."
    ];

    return (
        <div className="whyChooseUs section-padding" id='whyChooseUs'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whyChooseUs-data-parent">
                            <h3 className='sub-heading'>Why Choose Us</h3>
                            <h1 className="main-heading">WHY PARTNER WITH SILVERMOON DEBT COLLECTION?</h1>

                            <ul className="whyChooseUs-description">
                                {(showAll ? points : points.slice(0, 3)).map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                                {points.length > 3 && (
                                    <a
                                        className="read-more-btn"
                                        onClick={() => setShowAll(!showAll)}
                                    >
                                        {showAll ? "Read Less" : "Read More"}
                                    </a>
                                )}
                            </ul>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="whyChooseUs-image-parent">
                            <img src={whyChooseUs} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs