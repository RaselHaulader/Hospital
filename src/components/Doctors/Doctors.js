import React, { useEffect, useState } from 'react';
import ContactBar from '../ContactBar/ContactBar';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Doctors = () => {
    const [doctors, setDoctors]= useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/RaselHaulader/json/main/doctoreData.json')
        .then(result=>result.json())
        .then(data=>setDoctors(data))
        .catch(err=>console.log(err.message))
    },[])
    return (
        <div>
            <Header></Header>
            <ContactBar></ContactBar>
            <div className="pt5 mt-5 container mx-auto">
                <div className="text-center service-header my-5">
                    <h1 className="my-4">Our Expert Doctors</h1>
                    <p className="w-50 mx-auto text-secondary my-4">Doctors are the lifeblood of the economic and social structure of a country. They help give a safe life to the citizens of the country and as a result, help in increasing the quality of human resources.</p>
                </div>
                <div className="row container mx-auto">
                   {doctors.map((doctor)=> <Doctor key={doctor.name} doctor={doctor}/>)} 
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;