import React from 'react';
import loginSvg from '../../images/touch-illustration.png'
import './Login.css';

const Login = () => {
    const userExist = true;
    return (
        <div>
            <div className="row container border mx-auto p-5 rounded-3">
                <div className="col-12 col-md-6 d-flex align-items-center">
                    <img className="w-100" src={loginSvg} alt="" />
                </div>
                <div className="col-12 text-center login-form-body col-md-6">
                    <h2 className="login-form-heading my-5">{userExist? "LogIn Account" : "Create Account"} </h2>
                    <p className="text-secondary"><small>With Your Social Network</small></p>
                    <div className="d-flex w-75  mx-auto justify-content-between">
                        <button className="btn rounded-pill border  px-4">Google</button>
                        <button className="btn rounded-pill border  px-4">FaceBook</button>
                        <button className="btn rounded-pill border   px-4">Twitter</button>
                    </div>
                    <p className="fw-bold text-secondary mt-3"> - or -</p>
                    <div className=" d-flex m-0 flex-column align-items-center">
                        <div className="w-75 login-form ">
                           {!userExist && <input type="text" className="mt-0" placeholder="Name" />}<br/>
                            <input type="email" placeholder="Email" /><br />
                            <input type="password" placeholder="Password" /><br />
                            <button className="btn border-0 rounded-pill ps-5 w-100 text-white  py-2 mt-3 gradient-btn ">Login </button>
                           {userExist ?  <p className="mt-3 fw-bolder d-flex justify-content-evenly"><span className="text-danger">Forget password?</span><span className="text-success"> create an account.</span></p> :  <p className="mt-3 fw-bolder text-primary d-flex justify-content-evenly">Already have an account?</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;