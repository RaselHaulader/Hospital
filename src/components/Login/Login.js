import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import loginSvg from '../../images/touch-illustration.png'
import ContactBar from '../ContactBar/ContactBar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Login.css';

const Login = () => {
    const [userExist, setUserExist] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || "/";

    const handleExist = () => {
        setUserExist(userExist === true ? false : true)
    }
    const { user, setUser, googleSignIn, emailPassSignIn, emailPassLogin, errors } = useAuth()

    const handleName = (e) => {
        const userName = e.target.value;
        setName(userName)
    }
    const handleEmail = (e) => {
        const userEmail = e.target.value;
        setEmail(userEmail)
    }
    const handlePass = (e) => {
        const userPass = e.target.value;
        setPassword(userPass)
    }
    const handleGoogleSignIn = () => {
        googleSignIn().then(result => {
            setUser(result.user)
            history.push(redirect_uri)

            setError('')
        })
            .catch((err) => setError(err.message))

        console.log('signIn google')
    }
    const handleCreateAccount = () => {
        if (email.length < 2 || name.length < 2 || password.length < 6) {
            setError("Please Fill all the field properly and pass should be min 6 charechter")
            return
        }
        emailPassSignIn(email, password, name)
        setError(errors)
        setUserExist(true)
    }
    const handleLogIn = () => {
        if (email.length < 2 || password.length < 6) {
            setError("Please Fill all the field properly and pass should be min 6 charechter")
            return
        }
        emailPassLogin(email, password)
            .then(result => {
                setUser(result.user)
                history.push(redirect_uri)
                console.log('signin')
                setError('')
            }).catch((err) => setError(err.message))
    }
    return (
        <div>
            <Header></Header>
            <ContactBar></ContactBar>
            <div className="row container border mx-auto mt-5 p-5 rounded-3">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <img className="w-100" src={loginSvg} alt="" />
                </div>
                <div className="col-12 text-center login-form-body col-md-6">
                    <h2 className="login-form-heading my-5">{userExist ? "LogIn Account" : "Create Account"} </h2>
                    <p className="text-secondary"><small>With Your Social Network</small></p>
                    <div className="d-flex w-75  mx-auto justify-content-center">
                        <button onClick={handleGoogleSignIn} className="btn rounded-pill google-sign-btn border  px-3 me-1">Google</button>
                        <button className="btn rounded-pill fb-sign-btn border  px-3 me-1">FaceBook</button>
                        <button className="btn rounded-pill twitter-sign-btn border   px-3 me-1">Twitter</button>
                    </div>
                    <p className="fw-bold text-secondary mt-3">{user.displayName} - or -</p>
                    <div className=" d-flex m-0 flex-column align-items-center">
                        <div className="w-75 login-form ">
                            {!userExist && <input type="text" className="mt-0" placeholder="Name" onBlur={handleName} />}<br />
                            <input type="email" placeholder="Email" onBlur={handleEmail} /><br />
                            <input type="password" placeholder="Password" onBlur={handlePass} /><br />
                            {userExist ? <button onClick={handleLogIn} className="btn border-0 rounded-pill ps-5 w-100 text-white  py-2 mt-3 gradient-btn ">Login </button> : <button onClick={handleCreateAccount} className="btn border-0 rounded-pill ps-5 w-100 text-white  py-2 mt-3 gradient-btn ">Register</button>}
                            {userExist ? <p className="mt-3 fw-bolder d-flex justify-content-evenly"><span className="text-danger">Forget password?</span><span className="text-info" onClick={handleExist}> create an account.</span></p> : <p onClick={handleExist} className="mt-3 fw-bolder text-primary d-flex justify-content-evenly">Already have an account?</p>}
                            <p className="text-center fw-bolder text-warning">{error}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;