import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <Header></Header>
            <ContactBar></ContactBar>
            <div className="mt-5">
                <h1 className="contact-header text-center mb-5">Get In Touch With us</h1>
                <div className="row container mx-auto">
                    {/* contact form */}
                    <div data-aos="fade-down-right"   data-aos-duration="1500" data-aos-once="false" className="col-12 col-md-6 p-3  py-5 rounded-3 border">
                        <div>
                            <h1 className="text-center contact-header2">Send Message</h1>
                            <div className="send-message-form p-5">
                                <input className="rounded-pill my-3 p-2 border px-4" type="text" placeholder="Name" />
                                <input className="rounded-pill my-3 p-2 border px-4" type="email" placeholder="Email" />
                                <input className="rounded-pill my-3 p-2 border px-4" type="text" placeholder="Address" />
                                <textarea className="rounded-pill my-3 p-2 border px-4" placeholder="Your message"></textarea>
                                <button className="btn border-0 rounded-pill ps-3 w-100 text-white py-2 gradient-btn">Send Message </button>

                            </div>
                        </div>
                    </div>
                    {/* contact address boxes */}
                    <div data-aos="fade-down-left"   data-aos-duration="1500" data-aos-once="false" className="col-12 col-md-6 p-3">
                        <div className="row container">
                            <div className="col-12 col-md-6 p-1">
                                <div className="border m-2 rounded-3 p-2 py-4 text-center">
                                    <h5 className="fw-bold text-secondary">Office Address</h5>
                                    <p className="text-secondary "><small>
                                        Ghop Central Road <br /> Jessore, sadar <br /> khulna,Bangladesh</small></p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <div className="border m-2 rounded-3 p-2 py-4 text-center">
                                    <h5 className="fw-bold text-secondary">
                                        Phone Number
                                    </h5>
                                    <p className="text-secondary ">
                                        <small>
                                            +88 934  5 6 <br />
                                            +04231  34 4 <br />
                                            +018 23 43 56
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <div className="border m-2 rounded-3 p-2 py-4 text-center">
                                    <h5 className="fw-bold text-secondary">
                                        Email Address
                                    </h5>
                                    <p className="text-secondary ">
                                        <small>
                                            info@gmail.com <br />
                                            contact@yahoo.com <br />
                                            mecare@connect.net
                                        </small>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-1">
                                <div className="border m-2 rounded-3 p-2 py-4 text-center">
                                    <h5 className="fw-bold text-secondary">
                                        Fax Address
                                    </h5>
                                    <p className="text-secondary ">
                                        <small>
                                            jashore 7400 <br />
                                            mecare 320 rd fax <br />
                                            connect Fax 7400
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-center fw-bolder text-secondary">Call Now : <span className="text-info"> 019 877 399</span></h3>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;