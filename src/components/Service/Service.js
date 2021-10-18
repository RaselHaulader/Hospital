import React from 'react';
import './Service.css';
import logo1 from '../../images/02_Hodme_-01-modified (5).png'

const Service = () => {
    return (
        <div className="col-12 col-md-4 mb-4">
            <div className="service-container py-4 px-3 ">
                <div className="service-logo ">
                      <img src={logo1} alt="" />
                </div>
                <div className="service-info">
                    <h4 className="fw-bolder my-3">Cardiology</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, dicta soluta explicabo recusandae minima rerum adipisci laboriosam eum id omnis.</p>
                    <button className="btn rounded-pill border px-5"> See details</button>

                </div>
            </div>
        </div>
    );
};

export default Service;