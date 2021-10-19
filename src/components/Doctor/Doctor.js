import React from 'react';
import './Doctor.css';


const Doctor = ({doctor}) => {
    return (
        <div className="col-12 col-md-4">
            <div className="d-flex flex-column m-4 p-2 doctor-container">
                <div>
                    <img className="doctore-img " src={doctor.img} alt="" />
                </div>
                <div className="doctor-info">
                    <h4>{doctor.name}</h4>
                    <p>{doctor.specialist}</p>
                    <p>{doctor.info}</p>
                <i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i> <i class="fab fa-instagram"></i> <i class="fab fa-linkedin"></i> 
                </div>
            </div>
        </div>
    );
};

export default Doctor;