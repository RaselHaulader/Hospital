import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBar from './components/ContactBar/ContactBar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import AboutUs from './components/AboutUs/AboutUs';
import Doctors from './components/Doctors/Doctors';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
        <ContactBar></ContactBar>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Contact></Contact>
        <ServiceDetails></ServiceDetails>
        <Doctors></Doctors>
        <Login></Login>
        <NotFound></NotFound>
        <AboutUs></AboutUs>
        <Footer></Footer>
    </div>
  );
}

export default App;
