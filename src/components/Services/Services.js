import React from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    return (
        <div className="services-container mt-5 pt-5">
            <div className="text-center service-header">
                <h1 className="fw-bold mb-5">Our Services</h1> 
                <p>We provide best service to all our patient. We are committed to treat you very carefully.</p>
               <div className="row container mx-auto">
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               <Service></Service>
               </div>
            </div>
        </div>
    );
};

export default Services;