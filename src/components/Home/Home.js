import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactBar from '../ContactBar/ContactBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <ContactBar></ContactBar>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;