import React from 'react';
import img from '../../images/cardiology.jpg'
import './ServiceDetails.css'
const ServiceDetails = () => {
    return (
        <div>
            <h1 className="text-center my-5 service-details-heading">Service Details</h1>
            <div className="row container">
                <div className=" col-12 col-md-6">
                    <img className="w-100" src={img} alt="" />
                </div>
                <div className="col-12 col-md-6 ">
                    <h2 className="text-center service-details-heading2">Cardiology</h2>
                    <div className="text-secondary">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab repudiandae asperiores reprehenderit facere quisquam error deleniti est quia eum!</p>
                        <p>✔ Modern Technology</p>
                        <p>✔ Experienced Doctor</p>
                        <p>✔ CABG by beating heart technique</p>
                        <p>✔ CABG by conventional open heart techniques</p>
                    </div>
                    <button className="btn my-4 border-0 rounded-pill ps-5  text-white py-0 gradient-btn">Booking Now <i class="fas ms-3 fa-angle-right"></i></button>

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;