import React, { useState } from "react";
import { message, Spin } from "antd";
import { SendOutlined, LoadingOutlined } from "@ant-design/icons";
import "./ContactUs.css";

function Contact() {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        subject: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            message.error("Please fix the errors in the form");
            return;
        }

        setLoading(true);

        try {
            const apiUrl =
                process.env.NODE_ENV === "production"
                    ? "/api/send-email"   // ✅ Vercel auto handle karega
                    : "http://localhost:5173/api/send-email";

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", // ✅ important
                },
                body: JSON.stringify({
                    firstName: formData.firstName.trim(),
                    lastName: formData.lastName.trim(),
                    subject: formData.subject.trim(),
                    email: formData.email.trim(),
                    message: formData.message.trim(),
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    subject: "",
                    email: "",
                    message: "",
                });

                message.success(result.message || "Email sent successfully!");
            } else {
                message.error(result.message || "Failed to send email");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            message.error("Network error. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact-us-form section-padding" id="contact">
            <div className="container">
                <div className="headings-parent">
                    <h3 className='sub-heading text-center'>Get In Touch With Us</h3>
                    <h1 className='main-heading text-center width60'>
                        Fill the form below so we can get to know you and your needs better.
                    </h1>
                </div>

                <div className="contact-us-form-container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-12 col-sm-12 col-xl-8 col-lg-8">
                            <form onSubmit={sendEmail} noValidate>
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="fst-lst col-md-6 col-12">
                                            <label className="contact-label">
                                                First Name <span style={{ color: '#ff4d4f' }}>*</span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="firstName"
                                                placeholder="John"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.firstName && (
                                                <small style={{ color: "#ff4d4f" }}>
                                                    {errors.firstName}
                                                </small>
                                            )}
                                        </div>

                                        <div className="col-6 col-md-6 col-12 email">
                                            <label className="contact-label">
                                                Last Name <span style={{ color: '#ff4d4f' }}>*</span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="lastName"
                                                placeholder="Doe"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.lastName && (
                                                <small style={{ color: "#ff4d4f" }}>
                                                    {errors.lastName}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="fst-lst col-md-6 col-12">
                                            <label className="contact-label">
                                                Email <span style={{ color: '#ff4d4f' }}>*</span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                placeholder="example@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.email && (
                                                <small style={{ color: "#ff4d4f" }}>
                                                    {errors.email}
                                                </small>
                                            )}
                                        </div>

                                        <div className="col-6 col-md-6 col-12 email">
                                            <label className="contact-label">
                                                Subject <span style={{ color: '#ff4d4f' }}>*</span>
                                            </label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="subject"
                                                placeholder="How can we help you?"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                            {errors.subject && (
                                                <small style={{ color: "#ff4d4f" }}>
                                                    {errors.subject}
                                                </small>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="text-section">
                                    <label className="contact-label">
                                        Message <span style={{ color: '#ff4d4f' }}>*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        placeholder="Please describe your inquiry or message..."
                                        rows="8"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.message && (
                                        <small style={{ color: "#ff4d4f" }}>
                                            {errors.message}
                                        </small>
                                    )}
                                </div>

                                <div className="contact-btn">
                                    <button
                                        type="submit"
                                        className="all-btn"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <LoadingOutlined spin />
                                                <span style={{ marginLeft: '8px' }}>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <SendOutlined />
                                                <span style={{ marginLeft: '8px' }}>Send Your Message</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;