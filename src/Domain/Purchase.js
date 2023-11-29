import React, { useState } from 'react';
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import Useraside from '../Common/pages/Useraside'

import '../Common/assets/css/profile.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';

// image path 
import plant1 from '../Common/assets/image/description4.png'
import Rating from '../Common/assets/image/Rating.png'
import deletes from '../Common/assets/image/delete.png'

function Purchase() {
    const [value, setValue] = useState(0);

    const handleIncrement = () => {
        setValue(value + 1);
    };

    const handleDecrement = () => {
        setValue(value - 1);
    };
    return (
        <div className='purchase-section'>
            <Header />
            <div className='account-section'>
                <div className='container-90 pt-5'>
                    <span className='profile-head'>My Shopping Cart</span>
                    <div className='row m-0 py-3'>

                        <div className='col-3'>
                            <Useraside />
                        </div>
                        <div className='col-6'>
                            <div className='profile-card'>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col" className=''>Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='total-wish'>
                                            <td className='wish-product'>
                                                <div className='row m-0 pt-2'>
                                                    <div className='col-4 py-4'>
                                                        <img src={plant1} alt='plant1' className='w-100' />
                                                    </div>
                                                    <div className='col-8 py-4'>
                                                        <h5>Aglaonema</h5>
                                                        <img src={Rating} />
                                                        <h5>AED 14.99</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-5 px-0 sum-product'>
                                                <span>
                                                    <button onClick={handleDecrement}>-</button>
                                                    <a onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)} className='mx-2 text-decoration-none'>{value}</a>
                                                    <button onClick={handleIncrement}>+</button>
                                                </span>
                                            </td>
                                            <td className='py-5 text-center'><a className='text-decoration-none price-count'>AED 14.99</a><FontAwesomeIcon icon={faTrash} style={{ color: '#EA4B48' }} className='ps-3' /></td>
                                        </tr>
                                        <tr className='total-wish'>
                                            <td className='wish-product'>
                                                <div className='row m-0 pt-2'>
                                                    <div className='col-4 py-4'>
                                                        <img src={plant1} alt='plant1' className='w-100' />
                                                    </div>
                                                    <div className='col-8 py-4'>
                                                        <h5>Aglaonema</h5>
                                                        <img src={Rating} />
                                                        <h5>AED 14.99</h5>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='py-5 px-0 sum-product'>
                                                <span>
                                                    <button onClick={handleDecrement}>-</button>
                                                    <a onChange={(e) => setValue(parseInt(e.target.value, 10) || 0)} className='mx-2 text-decoration-none'>{value}</a>
                                                    <button onClick={handleIncrement}>+</button>
                                                </span>
                                            </td>
                                            <td className='py-5 text-center'><a className='text-decoration-none price-count'>AED 14.99</a><FontAwesomeIcon icon={faTrash} style={{ color: '#EA4B48' }} className='ps-3' /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='purchase-list'>
                                <p>Coupon Code</p>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Enter code" aria-label="Search" aria-describedby="searchButton" />
                                    <button className="btn" type="button" id="searchButton">Apply Coupon</button>
                                </div>
                                <div className='packing-card p-4'>
                                    <h2>Cart Total</h2>
                                    <div className='money-details'>
                                        <div className='row m-0'>
                                            <div className='col-6'>
                                                <h6 className=''>Subtotal :</h6>
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
                                        <button className='process-check'>Proceed to checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Purchase