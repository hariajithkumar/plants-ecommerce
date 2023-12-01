import React, { useState } from 'react'
import '../Common/assets/css/auth.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

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
import phone from '../Common/assets/image/phone.png'

import axios from 'axios';
import { setregisterDetails } from '../Redux/CreateSlice';


function Register() {
    const { registerDetails } = useSelector((state) => state.plants_product)
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const [confirm, setconfirm] = useState(false);
    const toggleConfiemPasswordVisibility = () => {
        setconfirm(!confirm);
    };
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = () => {
        navigate('/')
    }

    const signup = async() => {
        if (registerDetails.password == registerDetails.password_confirm) {
            try {
                console.log(registerDetails)
                // const apiUrl = 'https://webbitech.co.in/ecommerce/public/api/register';
                const {data} = await axios.get('https://webbitech.co.in/ecommerce/public/api/register',registerDetails);
                console.log(data)
                if (data.success == true) {
                    alert('register Successfully');
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(registerDetails)
            alert("don't match password and confirm password")
        }

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
                            <input type="email" className="form-control border-0 border-bottom" id="email" name='email' value={registerDetails.email} placeholder="Enter your email" required onChange={(e) => dispatch(setregisterDetails({...registerDetails,email: e.target.value }))} />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="text" className="form-label">Username</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={usericon} />
                            </span>
                            <input type="text" className="form-control border-0 border-bottom" id="name" placeholder="Enter your name" required onChange={(e) => dispatch(setregisterDetails({...registerDetails,name: e.target.value }))} />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="text" className="form-label">Mobile Number</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={phone} />
                            </span>
                            <input type="text" className="form-control border-0 border-bottom" id="name" placeholder="Enter your mobile number" required onChange={(e) => dispatch(setregisterDetails({...registerDetails,mobile: e.target.value }))} />
                        </div>
                    </div>
                    <div className="my-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <span className="pe-2">
                                <img src={lock} />
                            </span>
                            <input type={showPassword ? 'text' : 'password'} className="form-control border-0 border-bottom" id="password" placeholder="Enter your password" required onChange={(e) => dispatch(setregisterDetails({...registerDetails,password: e.target.value }))} />
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
                            <input type={confirm ? 'text' : 'password'} className="form-control border-0 border-bottom" id="password" placeholder="Confrim your Password" onChange={(e) => dispatch(setregisterDetails({...registerDetails,password_confirm: e.target.value }))} />
                            <button
                                className="btn "
                                type="button"
                                onClick={toggleConfiemPasswordVisibility}
                            >
                                <FontAwesomeIcon icon={confirm ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>
                    <div className='btn-section'>
                        <button className='button' onClick={() => signup()}>Register</button>
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