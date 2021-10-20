import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ChoosePrice from '../ChoosePrice/ChoosePrice';
import ContactBar from '../ContactBar/ContactBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);

const Home = () => {
    return (
        <div>
            <ContactBar></ContactBar>
            <Header></Header>
            <Swiper
                spaceBetween={0}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
                speed={1500}
                style={{height:"95vh" , width:"100%"}}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                modules={[EffectFade]} effect="fade"

                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide> <Banner img="https://i.ibb.co/Vtppkrv/home-banner.png" ></Banner></SwiperSlide>
                <SwiperSlide> <Banner img="https://i.ibb.co/r32khwJ/banner3-63.png" ></Banner></SwiperSlide>

            </Swiper>

            <Services></Services>
            <AboutUs></AboutUs>
            <ChoosePrice></ChoosePrice>
            <Footer></Footer>
        </div>
    );
};

export default Home;