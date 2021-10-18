import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className=" footer-text pt-4 mt-5">
            <div className="row container mx-auto">
                <div className="col-md-3 col-12">
                    <h2>ME CARE</h2>
                </div>
                <div className="col-md-3 col-12">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Our Doctors</li>
                    <li>Our Services</li>
                </div>
                <div className="col-md-3 col-12">
                    <li>About Online service</li>
                    <li>Read Our blog</li>
                    <li>Sign up to service</li>
                    <li>Add your booking</li>
                </div>
                <div className="col-md-3 col-12">
                    <p> - Privacy and policy</p>
                    <p> - Contact fo info</p>
                    <p> - Hospital Near you</p>
                    <p> - Join With Us</p>
                </div>

            </div>
            <div className='d-flex justify-content-between p-5  mt-4'><span>Copyright by Russel 2021</span><span>Privacy Policy. Terms of use Pricing</span></div>
        </div>
    );
};

export default Footer;