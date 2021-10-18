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
                <div className="col-12 col-md-6 p-3  py-5 rounded-3 border">
                    <div>
                        <h1 className="text-center contact-header2">Send Message</h1>
                        <div className="send-message-form p-5">
                            <input  className="rounded-pill my-3 p-2 border px-4" type="text" placeholder="Name" />
                            <input className="rounded-pill my-3 p-2 border px-4" type="email" placeholder="Email" />
                            <input className="rounded-pill my-3 p-2 border px-4" type="text" placeholder="Address" />
                            <textarea className="rounded-pill my-3 p-2 border px-4" placeholder="Your message"></textarea>
                            <button className="btn border-0 rounded-pill ps-3 w-100 text-white py-2 gradient-btn">Send Message </button>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 p-3">
                    <div className="row container">
                        <div className="col-6 p-2">
                            <div className="border m-2 rounded-3 p-4 text-center">
                                <h4>Address</h4>
                                <p className="text-secondary">dosjfsadfosdf</p>
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="border m-2 rounded-3 p-4 text-center">
                                <h4>Address</h4>
                                <p className="text-secondary">dosjfsadfosdf</p>
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="border m-2 rounded-3 p-4 text-center">
                                <h4>Address</h4>
                                <p className="text-secondary">dosjfsadfosdf</p>
                            </div>
                        </div>
                        <div className="col-6 p-2">
                            <div className="border m-2 rounded-3 p-4 text-center">
                                <h4>Address</h4>
                                <p className="text-secondary">dosjfsadfosdf</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;