import { useState } from "react";
import Footer from "../components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="container my-5">
                <h1 className="text-center mb-5">Contact Us</h1>
                <p className="text-center text-muted mb-5">
                    Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h4 className="mb-4">Get in Touch</h4>
                                <div className="mb-3">
                                    <h6> Address</h6>
                                    <p className="text-muted">123 Book Street<br /> City, RC 12345</p>
                                </div>
                                <div className="mb-3">
                                    <h6> Phone</h6>
                                    <p className="text-muted">+1 234 567 8900</p>
                                </div>
                                <div className="mb-3">
                                    <h6> Email</h6>
                                    <p className="text-muted">info@bookstore.com</p>
                                </div>
                                <div>
                                    <h6> Business Hours</h6>
                                    <p className="text-muted">
                                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                                        Saturday - Sunday: 10:00 AM - 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h4 className="mb-4">Send us a Message</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="subject"
                                            placeholder="Subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            rows="5"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}