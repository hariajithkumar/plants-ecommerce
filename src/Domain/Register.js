import React, { useState } from 'react'
import '../Common/assets/css/auth.css'
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLock, faEnvelope, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';


import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

// image path
import loginImg from '../Common/assets/image/login_img.png'
import mail from '../Common/assets/image/mail.png'
import usericon from '../Common/assets/image/usericon.png'
import lock from '../Common/assets/image/lock.png'
import facebook from '../Common/assets/image/Facebook.png'
import twitter from '../Common/assets/image/twitter.png'
import google from '../Common/assets/image/google.png'



function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [confirmPassword, setConfirmPassword] = useState(false);
    const toggleConfiemPasswordVisibility = () => {
        setConfirmPassword(!confirmPassword);
    };
    const navigate = useNavigate()
    const login = () => {
        navigate('/')
    }
    return (
        <div className='login-section'>
            <div className='row m-0 p-3 align-items-stretch'>
                <div className='col-lg-6 col-md-12 col-12 input-section'>
                    <h4>Sign up</h4>
                    <h5>If you already have an account register</h5>
                    <h5>You can <span className='register-hover' onClick={() => login()}>Login here !</span></h5>
                    <div className="my-3">
                        <label htmlFor="text" className="form-label">Email</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={mail} />
                            </span>
                            <input type="email" className="form-control border-0 border-bottom" id="email"  placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="text" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={usericon} />
                            </span>
                            <input type="text" className="form-control border-0 border-bottom" id="password" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={lock} />
                            </span>
                            <input type={showPassword ? 'text' : 'password'} className="form-control border-0 border-bottom" id="password" placeholder="Enter your password"   
                            />
                            <button className="btn " type="button" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="password" className="form-label">Confirm Password</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={lock} />
                            </span>
                            <input type={confirmPassword ? 'text' : 'password'} className="form-control border-0 border-bottom" id="password" placeholder="Confrim your Password" />
                            <button
                                className="btn "
                                type="button"
                                onClick={toggleConfiemPasswordVisibility}
                            >
                                <FontAwesomeIcon icon={confirmPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>
                    <div className='btn-section'>
                        <button className='button'>Register</button>
                    </div>
                </div>
                <div className='col-lg-6 col-md-12 col-12 bg-color p-4 text-center mt-lg-0 mt-5'>
                    <h5 className='text-end phone_number'><FontAwesomeIcon icon={faPhone} style={{ color: "#fafafa", }} className='px-2' /> +971 5 65015231</h5>
                    <img src={loginImg} className='w-75' />
                </div>
            </div>
        </div>
    )
}

export default Register