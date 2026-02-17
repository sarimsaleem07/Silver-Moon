import React from 'react';
import "./Testimonials.css";
import { RiDoubleQuotesL } from 'react-icons/ri';

const Testimonials = () => {
    const topData = [
        { name: "Muhammad Asif", position: "Finance Manager", message: "Their recovery team handled our overdue accounts professionally and efficiently. We saw results within weeks." },
        { name: "Ayesha Siddiqua", position: "Operations Head", message: "Very transparent process and regular follow-ups. Highly reliable debt recovery services." },
        { name: "Bilal Hussain", position: "Business Owner", message: "They recovered payments we had almost given up on. Truly impressed by their commitment and communication." },
        { name: "Imran Qureshi", position: "Accountant", message: "Fast and professional service. Helped us recover outstanding payments without hassle." },
        { name: "Hina Khan", position: "Finance Officer", message: "Excellent communication and prompt updates. Highly recommend their team for debt recovery." },
        { name: "Zain Ahmed", position: "Operations Manager", message: "Very efficient process and transparent reporting. Great results in just a few weeks." }
    ];

    const bottomData = [
        { name: "Sara Malik", position: "Accounts Supervisor", message: "Professional staff with clear reporting. Our cash flow improved significantly after working with them." },
        { name: "Faisal Ahmed", position: "Director", message: "Ethical recovery approach with strong results. Would definitely recommend them to other businesses." },
        { name: "Ali Raza", position: "HR Manager", message: "Prompt and transparent communication. Very reliable for debt recovery services." },
        { name: "Nadia Farooq", position: "Finance Head", message: "Team was very professional and kept us informed at every step. Impressive results." },
        { name: "Osman Shah", position: "Business Owner", message: "Recovered payments quickly and efficiently. Very satisfied with their service." },
        { name: "Sana Iqbal", position: "Accounts Manager", message: "Clear reporting and timely follow-ups. Great service for overdue accounts." }
    ];


    const renderSlider = (data, direction) => {
        const duplicatedData = [...data, ...data];
        return (
            <div className={`slider ${direction}`}>
                <div className="slider-track">
                    {duplicatedData.map((item, index) => (
                        <div className="testimonial" key={index}>
                            <div className="testimonial-icon-parent">
                                <RiDoubleQuotesL className='testimonial-icon' />
                            </div>
                            <div className="testimonial-message">
                                <p>{item.message}</p>
                            </div>
                            <div className="testimonial-data">
                                <h5 className="testimonial-data-name">{item.name}</h5>
                                <h6 className="testimonial-data-position">{item.position}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="testimonials">
            <div className="container">
                <div className='testimonials section-padding'>
                    <div className="headings-parent">
                        <h3 className='sub-heading text-center'>Testimonials</h3>
                        <h1 className='main-heading text-center width60'>Our Clients Reviews</h1>
                    </div>
                    {renderSlider(topData, "ltr")}
                    {renderSlider(bottomData, "rtl")}
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
