import React from 'react';
import ContactBar from '../ContactBar/ContactBar';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Doctors = () => {
    return (
        <div>
            <Header></Header>
            <ContactBar></ContactBar>
            <div className="pt5 mt-5 container mx-auto">
                <div className="text-center service-header">
                    <h1 className="my-4">Our Expert Doctors</h1>
                    <p className="w-50 mx-auto text-secondary my-4">Lorem ipsum dololit. Cumque facilis rerum consectetur, nesciunt praesentium dolore eum, ducimus itaque magni dolor assumenda eos omnis impedit iste in distinctio fugiat non minima.</p>
                </div>
                <div className="row container mx-auto">
                     <Doctor></Doctor> 
                     <Doctor></Doctor> 
                     <Doctor></Doctor> 
                     <Doctor></Doctor> 
                     <Doctor></Doctor> 
                     <Doctor></Doctor> 
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Doctors;