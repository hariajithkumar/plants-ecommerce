import React, { useState } from 'react';
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import '../Common/assets/css/description.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faTruckFast } from '@fortawesome/free-solid-svg-icons';



// image path 
import description1 from '../Common/assets/image/description1.png'
import description2 from '../Common/assets/image/description2.png'
import description3 from '../Common/assets/image/description3.png'
import description4 from '../Common/assets/image/description4.png'
import Rating from '../Common/assets/image/Rating.png'
import shop from '../Common/assets/image/white-shop.png'
import heart from '../Common/assets/image/shop-heart.png'
import icon1 from '../Common/assets/image/footer-facebook.png'
import icon2 from '../Common/assets/image/footer-twitter.png'
import icon3 from '../Common/assets/image/footer-pinterest.png'
import icon4 from '../Common/assets/image/footer-instagram.png'




function Placeorder() {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };

    const [activeTab, setActiveTab] = useState('tab1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const payment = () => {
        // navigate('/ProductOrderForm')
        navigate('/Orderprocess')
    }
    return (
        <div>
            <div className='description-section'>
                <Header />
                <section className='description container-90 py-5'>
                    <div className='row m-0'>
                        <div className='col-8 price-card'>
                            <div className='row m-0'>
                                <div className='col-5'>
                                    <img src={description4} className='w-100 h-100' />
                                </div>
                                <div className='col-6 ms-3 description-details'>
                                    <h1>Aglaonema <span className='stock'>In Stock</span></h1>
                                    <img src={Rating} alt='Rating' />
                                    <span className='review'>4 Reviews</span>
                                    <br />
                                    <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                                    <button className='sales-offer'>50% off</button>
                                    <hr />
                                    <p>A philodendron white knight has lovely deep red stems that look a lot like pink princess philodendron stems. The leaves, however, are a deep green with bright white variegation. Not ivory, not cream. Bright white.</p>
                                    <span className="mb-3 count-btn">
                                        <button
                                            className="btn sum-btn"
                                            type="button"
                                            onClick={handleDecrement}
                                        >
                                            -
                                        </button>
                                        <span onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)} className='mx-4 count-value'>{value}</span>
                                        <button
                                            className="btn sum-btn"
                                            type="button"
                                            onClick={handleIncrement}
                                        >
                                            +
                                        </button>
                                    </span>
                                    <h4 className='cate my-4'>Category:<span> Indoor Plant</span></h4>
                                </div>
                            </div>
                            {/* <div className='text-center'>
                                <button className='buynow' onClick={() => buynow()}>Place order<FontAwesomeIcon icon={faTruckFast} className='mx-2' /></button>
                            </div> */}
                        </div>
                        <div className='col-lg-4'>
                            <div className='packing-card price-card p-4'>
                                <h2>PRICE DETAILS</h2>
                                <div className='money-details'>
                                    <div className='row m-0'>
                                        <div className='col-6'>
                                            <h6 className=''>Price (1 item):</h6>
                                        </div>
                                        <div className='col-6 text-end'>
                                            <h6 className=''>AED 149.9</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='money-details'>
                                    <div className='row m-0'>
                                        <div className='col-6'>
                                            <h6 className=''>Shipping :</h6>
                                        </div>
                                        <div className='col-6 text-end'>
                                            <h6 className=''>Free</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className='row m-0'>
                                    <div className='col-6'>
                                        <h3 className=''>Total :</h3>
                                    </div>
                                    <div className='col-6 text-end'>
                                        <h3 className=''>AED 149.9</h3>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='buynow' onClick={() => payment()}>Place order<FontAwesomeIcon icon={faTruckFast} className='mx-2' /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default Placeorder