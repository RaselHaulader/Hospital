import React from 'react';
import './Doctor.css';
import dctrimg from '../../images/images (5).jpg'

const Doctor = () => {
    return (
        <div className="col-12 col-md-4">
            <div className="d-flex flex-column m-4 p-2 doctor-container">
                <div>
                    <img className="doctore-img " src={dctrimg} alt="" />
                </div>
                <div className="doctor-info">
                    <h4>Dr. Khaled Hasan</h4>
                    <p>Physical Medicine Mbbs</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolore!</p>
                <i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> <i class="fab fa-linkedin"></i> 
                </div>
            </div>
        </div>
    );
};

export default Doctor;