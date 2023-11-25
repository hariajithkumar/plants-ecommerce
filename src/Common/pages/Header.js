import React from 'react'

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import '../assets/css/regular.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSearch } from '@fortawesome/free-solid-svg-icons';

// image path
import headphone from '../assets/image/Headset.png'
import location from '../assets/image/location.png'
import logo from '../assets/image/logo.png'
import shop from '../assets/image/header1.png'
import heart from '../assets/image/header2.png'
import profile from '../assets/image/header3.png'


function Header() {
    return (
        <>
            <header>
                <div className='top-header'>
                    <div className='container-90'>
                        <div className='row m-0 p-2'>
                            <div className='col-lg-6 col-md-6 col-12 text-start'>
                                <h4><img src={location} className='mx-2 p-0' />PO BOX:115786 - Al Warsan3, Dubai, UAE.</h4>
                            </div>
                            <div className='col-lg-6 col-md-6 col-12'>
                                <h4 className='text-lg-end text-md-end text-center phone_number'><img src={headphone} className='mx-2' />+971 42872900</h4>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='bottom-header py-4'>
                    <div className='container-90'>
                        <div className='row m-0 p-2'>
                            <div className='col-4 text-start d-flex align-items-center'>
                                <div className="input-group input-set">
                                    <span className="input-group-text border-0 bg-none bg-white" id="searchIcon">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                    <input type="text" className="form-control border-0" placeholder="Search our shop" aria-label="Search" aria-describedby="searchButton" />
                                    <button className="btn btn-outline-secondary" type="button" id="searchButton">search</button>
                                </div>
                            </div>
                            <div className='col-5 text-center'>
                                <img src={logo} />
                            </div>
                            <div className='col-3  d-flex align-items-center justify-content-end icon-section'>
                                <img src={heart} alt='heart' className='mx-3'/>
                                <img src={shop} alt='shop' className='mx-3'/>
                                <img src={profile}  className='mx-3'/>
                                <span className='item-count'>1</span>
                            </div>
                        </div>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header