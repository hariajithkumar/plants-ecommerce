import React, { useState, useEffect } from 'react';

import '../assets/css/regular.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// image path
import headphone from '../assets/image/Headset.png'
import location from '../assets/image/location.png'
import logo from '../assets/image/logo.png'
import shop from '../assets/image/header1.png'
import heart from '../assets/image/header2.png'
import profile from '../assets/image/header3.png'
import mobilelogo from '../assets/image/mobilelogo.png'
import whiteheart from '../assets/image/white_Heart.png'
import whiteprofile from '../assets/image/white_user.png'
import whitesearch from '../assets/image/white_search.png'
import whiteshop from '../assets/image/white_shop.png'
import whitenav from '../assets/image/whitenav.png'
function Header() {
    const { likescount,shopcount } = useSelector((state) => state.plants_product)

    const [isSticky, setIsSticky] = useState(false);

    const navigate = useNavigate()
    const hearts = () => {
        navigate('/Wishlist')
    }
    const shops = () => {
        navigate('/Purchase')
    }
    const userProfile = () => {
        navigate('/Profile')
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 2) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <>
            <div className='top-header '>
                <div className='container-90 d-lg-block d-none'>
                    <div className='row m-0 p-2'>
                        <div className='col-lg-6 col-md-12 col-12 text-start p-0'>
                            <h4><img src={location} className='mx-2 p-0' />PO BOX:115786 - Al Warsan3, Dubai, UAE.</h4>
                        </div>
                        <div className='col-lg-6 col-md-12 col-12 p-0'>
                            <h4 className='text-lg-end text-center phone_number'><img src={headphone} className='mx-2' />+971 42872900</h4>
                        </div>
                    </div>
                </div>
            </div>
            <header className='position-sticky top-0 sticky-header'>
                <div className={isSticky ? 'sticky-element' : 'bottom-header'}>
                    <div className='container-90'>
                        <div className='d-lg-block d-md-block d-none'>
                            <div className='row m-0 p-2'>
                                <div className='col-lg-4 col-md-5 col-6 text-start d-flex align-items-center'>
                                    <div className="input-group input-set">
                                        <span className="input-group-text border-0 bg-none bg-white" id="searchIcon">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </span>
                                        <input type="text" className="form-control border-0" placeholder="Search our shop" aria-label="Search" aria-describedby="searchButton" />
                                        <button className="btn btn-outline-secondary" type="button" id="searchButton">search</button>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-3 text-center d-lg-block d-md-block d-none'>
                                    <img src={logo} />
                                </div>
                                <div className='col-lg-3 col-md-4 col-5 d-flex align-items-center justify-content-lg-end justify-content-md-center icon-section'>
                                    <div className='d-lg-block d-md-block d-none'>
                                        <img src={heart} alt='heart' className='mx-3 view-all' onClick={() => hearts()} />
                                        <img src={shop} alt='shop' className='mx-3 view-all' onClick={() => shops()} />
                                        <img src={profile} className='mx-3 view-all' onClick={() => userProfile()} />
                                        <span className='item-count'>{shopcount}</span>
                                        <span className='like-count'>{likescount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='nav-section'>
                    <nav className="navbar navbar-expand-lg container-90">
                        <div className="container p-0">
                            <a className="navbar-brand d-none" href="#"><img src={mobilelogo} /></a>
                            <button className="navbar-toggler d-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className=""><img src={whitenav} /></span>
                            </button>
                            <a className="navbar-brand d-lg-none d-md-none" href="#"><img src={mobilelogo} /></a>
                            <div className='icon-section d-lg-none d-md-none'>
                                <img src={whiteheart} alt='heart' className='mx-3 mobile-margin' onClick={() => hearts()}/>
                                <img src={whiteshop} alt='shop' className='mx-3 mobile-margin' onClick={() => shops()}/>
                                <img src={whiteprofile} className='mx-3 mobile-margin' onClick={() => userProfile()}/>
                                <img src={whitesearch} className='mx-3 mobile-margin' />
                                <span className='item-count'>{shopcount}</span>
                                <span className='like-count'>{likescount}</span>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav py-2 nav-content">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item dropdown" aria-labelledby="dropdownMenuButton">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Indoor Plants
                                            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fafafa", }} className='ps-2' />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Outdoor Plants
                                            <FontAwesomeIcon icon={faChevronDown} style={{ color: "#fafafa", }} className='ps-2' />
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Flower Pots / Planters
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Seeds & Grow Kits
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Planting Arrangements
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle option-list" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Planting Supplies
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header