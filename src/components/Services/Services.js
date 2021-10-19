import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
          fetch('./serviceData.json')
          .then(result=> result.json())
          .then(data=> setServices(data))
          .catch(err=>console.log(err.message))      
    },[])
    return (
        <div id="services" className="services-container mt-5 pt-5">
            <div className="text-center service-header">
                <h1 className="fw-bold mb-5">Our Services</h1> 
                <p>We provide best service to all our patient. We are committed to treat you very carefully.</p>
               <div className="row container mx-auto">
                  {services.map((service)=> <Service key={service.id} service={service} />)}
               </div>
            </div>
        </div>
    );
};

export default Services;