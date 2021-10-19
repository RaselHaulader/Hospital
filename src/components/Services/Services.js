import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    // fetch service data and display them in ui
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
                <p className="w-75 mx-auto text-secondary my-5 px-5">We provide best service to all our patient. <br/> We are committed to treat Our patient very carefully. Our experienced doctor always <br/> focused on better treatment and quality service.</p>
               <div className="row container mx-auto">
                  {services.map((service)=> <Service key={service.id} service={service} />)}
               </div>
            </div>
        </div>
    );
};

export default Services;