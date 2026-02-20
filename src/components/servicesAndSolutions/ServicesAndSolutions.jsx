import React from "react";
import "./ServicesAndSolutions.css";
import challenge from "../../assets/challenge.jpg"
import solution from "../../assets/solution.jpg"
import advantage from "../../assets/competitiveAdvantage.jpg"
import targetClients from "../../assets/targetClients.jpg"
import marketStrategy from "../../assets/marketStrategy.jpg"
import revenueModel from "../../assets/revenueModel.jpg"
import vision from "../../assets/Vision.jpg"

const ServicesAndSolutions = () => {
    const cardData = [
        {
            title: "Challenge",
            subtitle: "Payment delays hurting SMEs",
            back: [
                "SMEs face payment delays of 60–120+ days, hurting cash flow.",
                "High-risk sectors: Construction, Real Estate, Trading.",
                "Legal recovery is costly and slow; many businesses lack structured processes."
            ],
            image: challenge,
        },
        {
            title: "Our Solution",
            subtitle: "Structured recovery services",
            back: [
                "Pre-Legal Recovery: Negotiation & settlement before legal action.",
                "Corporate & Consumer Collections: B2B & B2C debts.",
                "Skip Tracing: Locate debtors anywhere in UAE.",
                "Case Tracking: Transparent progress updates."
            ],
            image: solution,
        },
        {
            title: "Competitive Advantage",
            subtitle: "Why choose us?",
            back: [
                "Multilingual Team: English, Arabic, Urdu – improves recovery rates.",
                "Transparent Pricing: 20% commission on recovered amount only.",
                "Performance-Based: No recovery = no fee."
            ],
            image: advantage,
        },
        {
            title: "Target Clients",
            subtitle: "Who we serve",
            back: [
                "Construction & Real Estate companies",
                "Banks, Fintech & Telecom",
                "Trading businesses & Medical providers"
            ],
            image: targetClients,
        },
        {
            title: "Go-To-Market Strategy",
            subtitle: "Expansion plan",
            back: [
                "Phase 1: Dubai SMEs – direct outreach & referrals",
                "Phase 2: Corporate expansion & legal firm collaborations"
            ],
            image: marketStrategy,
        },
        {
            title: "Revenue Model",
            subtitle: "How we earn",
            back: [
                "High-margin, scalable: 20% of recovered funds.",
                "AED 1M recovered → AED 200K revenue",
                "AED 5M recovered → AED 1M revenue"
            ],
            image: revenueModel,
        },
        {
            title: "Vision",
            subtitle: "Growth roadmap",
            back: [
                "Today: Establish presence in Dubai",
                "Near Future: Expand to Abu Dhabi & Sharjah",
                "Long-Term: Regional growth across GCC"
            ],
            image: vision,
        },
    ];

    const FlipCard = ({ frontTitle, frontSubtitle, backText, imageUrl }) => {
        return (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div
                        className="flip-card-front"
                        style={{
                            background: imageUrl
                                ? `url(${imageUrl}) center/cover no-repeat`
                                : "#313131",
                        }}
                    >
                        <div className="flip-card-front-overlay"></div>
                        <div className="inner">
                            <h3>{frontTitle}</h3>
                            <h6>{frontSubtitle}</h6>
                        </div>
                    </div>
                    <div className="flip-card-back">
                        <div className="inner">
                            {Array.isArray(backText) ? (
                                <ul>
                                    {backText.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{backText}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card-container section-padding" id="services">
            <div className="container">
                <div className="row g-3" style={{ justifyContent: "center" }}>
                    <div className="headings-parent">
                        <h3 className='sub-heading text-center'>Our Services & Solutions</h3>
                        <h1 className='main-heading text-center'>Helping businesses tackle challenges, recover payments, and grow.</h1>
                    </div>
                    {cardData.map((card, index) => (
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <FlipCard
                                key={index}
                                frontTitle={card.title}
                                frontSubtitle={card.subtitle}
                                backText={card.back}
                                imageUrl={card.image}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesAndSolutions;
