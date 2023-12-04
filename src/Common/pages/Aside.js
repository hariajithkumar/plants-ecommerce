import React, { useState, useEffect } from 'react';
import '../assets/css/aside.css'
import axios from "axios";

// image path 

import star1 from '../assets/image/Rating1.png'
import star2 from '../assets/image/Rating2.png'
import star3 from '../assets/image/Rating3.png'
import star4 from '../assets/image/Rating4.png'
import star5 from '../assets/image/Rating5.png'
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts, setpriceFilter } from '../../Redux/CreateSlice'


function Aside() {
    const { allplantsDetails, priceFilter,filteredProducts } = useSelector((state) => state.plants_product)
    const [sliderValue, setSliderValue] = useState(0); // Initial value
    const dispatch = useDispatch();

   
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(50000); // Assuming a maximum price, adjust as needed


    useEffect(() => {
        // Filter products based on the max price
        const filtered = allplantsDetails.filter(product => product.total_price <= maxPrice);
        dispatch(setFilteredProducts(filtered));
    }, [maxPrice, allplantsDetails]);
    // filterProducts(maxPrice);
    console.log(filteredProducts)
    return (
        <>
            <aside className='my-5'>
                <div className='aside-section'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button btn-option" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <b>Features</b>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Table Top<span>(13)</span></label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Medium Light<span>(15)</span></label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Low Light<span>(18)</span></label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Bright Light<span>(13)</span></label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Pet Friendly<span>(15)</span></label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Air Purifying<span>(18)</span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed btn-option" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b>Care level</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Care Free / Easy</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Moderate</label>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label" for="exampleCheck1">Hard</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed btn-option" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>Price</b>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                {/* <div className="accordion-body">
                                    <div className="mb-3">
                                        <input
                                            type="range"
                                            className="form-range custom-range range-slider"
                                            id="customRange"
                                            value={sliderValue}
                                            onChange={handleSliderChange}
                                            step="1"
                                            min="0"
                                            max="10000"
                                        />
                                    </div>
                                    <p>Price: {sliderValue}</p>
                                </div> */}
                                <label>
                                    Price Range:
                                    <input
                                        type="range"
                                        min={0}
                                        max={50000} // Assuming a maximum price, adjust as needed
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}

                                    />
                                    {minPrice}
                                </label>
                                <label>
                                    <input
                                        type="range"
                                        min={0}
                                        max={50000} // Assuming a maximum price, adjust as needed
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value, 10))}
                                    />
                                    {maxPrice}
                                </label>

                            </div>
                        </div>
                        <hr className='m-0' />
                        <div className="accordion-item border-0">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed btn-option" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <b>Rating</b>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse show" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <img src={star1} alt='star1' />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <img src={star2} alt='star3' />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <img src={star3} alt='star3' />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <img src={star4} alt='star4' />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <img src={star5} alt='star5' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>

    )
}

export default Aside