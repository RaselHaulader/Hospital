import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from '../../images/cardiology.jpg'
import ContactBar from '../ContactBar/ContactBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const [services, setServices] = useState([])
    const [service, setService] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/RaselHaulader/json/main/serviceData.json")
        .then(result=>result.json())
        .then(data=> setServices(data))
    },[])

    useEffect(()=>{
        console.log(id)
        console.log(services)
        const service = services.filter((item)=> item.id === parseInt(id))
        setService(service[0])
        console.log(service)
    },[services])

    return (
        <div>
            <Header></Header>
            <ContactBar></ContactBar>
            <div>
            <h1 className="text-center my-5 service-details-heading">Service Details</h1>
            <div className="row container">
                <div className=" col-12 col-md-6 d-flex align-items-center">
                    <img className="w-100" src={service?.img} alt="" />
                </div>
                <div className="col-12 col-md-6 ">
                    <h2 className="text-center service-details-heading2">{service?.serviceName}</h2>
                    <div className="text-secondary">
                        <p>{service?.info}</p>
                        <p>✔ {service?.service1}</p>
                        <p>✔ {service?.service2}</p>
                        <p>✔ {service?.service3}</p>
                        <p>✔ {service?.service4}</p>
                        <p>✔ {service?.service5}</p>
                        <p>✔ {service?.service6}</p>
                       
                    </div>
                    <button className="btn my-4 border-0 rounded-pill ps-5  text-white py-0 gradient-btn">Booking Now <i class="fas ms-3 fa-angle-right"></i></button>

                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;