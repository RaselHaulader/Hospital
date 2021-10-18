import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactBar from './components/ContactBar/ContactBar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
        <ContactBar></ContactBar>
        <Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Login></Login>
        <Footer></Footer>
    </div>
  );
}

export default App;
