import React from 'react';
import './ContactBar.css'

const ContactBar = () => {
    return (
        <div className="contact-bar-container py-2">
            <div className="w-75 mx-auto row d-flex align-items-center justify-content-between">
                <div className="col-md-6 col-12 d-flex align-items-center">
                    <p><i className="far fa-envelope"></i> info@contact.com</p>
                    <p><i className="fas fa-phone"></i> +9 903 34 546</p>
                </div>
                <div className="col-md-6 col-12 d-flex justify-content-end social-icon-container">
                    <i className="fab fa-facebook"></i> <i className="fab fa-twitter"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
    );
};

export default ContactBar;