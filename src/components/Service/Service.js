import React from 'react';
import './Service.css';
import { NavLink } from 'react-router-dom';

const Service = ({service}) => {
    const { logo, serviceName, info,id } = service
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="service-container py-4 px-3 ">
                <div className="service-logo ">
                      <img src={logo} alt="" />
                </div>
                <div className="service-info">
                    <h4 className="fw-bolder my-3">{serviceName}</h4>
                    <p className="text-secondary">{info.slice(0,90)}...</p>
                    <NavLink to={`/details/${id}`} className="btn rounded-pill border px-5"> See details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;