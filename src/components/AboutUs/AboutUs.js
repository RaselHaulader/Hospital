import React from 'react';
import aboutSvg from '../../images/de-illustration.png';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div id="about">
            <div className="row container mx-auto pt-5">
                <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <img className="w-100" src={aboutSvg} alt="" />
                </div>
                <div className="col-12 col-md-6 d-flex pb-2 justify-content-center">
                    <div className="about-details">
                        <h1 className=" about-header text-center my-5">About us</h1>
                        <h1 className=" about-header2">We Are Specialize in Medical Diagnositics</h1>
                        <p>When you visit 8-2-8 Urgent Care, you will be seen by our professional staff of physicians, PA's, x-ray technicians and medical assistants who will provide you with high quality care, minimal wait times and a positive experience every time.</p>
                        <li>Committed To serve you our bes</li>
                        <li>Modern Technology</li>
                        <li>Experienced Doctors</li>
                        <button className="btn border-0 rounded-pill ps-5  text-white  py-2 mt-3 gradient-btn">Read more <i class="fas ms-3 fa-angle-right"></i></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;