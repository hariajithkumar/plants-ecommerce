import React, { useState, useEffect } from 'react';
import '../assets/css/aside.css'

// image path 

import star1 from '../assets/image/Rating1.png'
import star2 from '../assets/image/Rating2.png'
import star3 from '../assets/image/Rating3.png'
import star4 from '../assets/image/Rating4.png'
import star5 from '../assets/image/Rating5.png'
import { useSelector, useDispatch } from 'react-redux';
import { setpriceFilter } from '../../Redux/CreateSlice'


function Aside() {
    const { allplantsDetails, priceFilter } = useSelector((state) => state.plants_product)
    const [sliderValue, setSliderValue] = useState(0); // Initial value
    const dispatch = useDispatch();

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value, 10));
        dispatch(setpriceFilter(sliderValue))
    };
    const [products, setProducts] = useState([]); // Original product list
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered product list
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000); // Assuming a maximum price, adjust as needed

    useEffect(() => {
        // Fetch the list of products from your API
        const fetchProducts = async () => {
            try {
                const response = allplantsDetails;
                setProducts(response);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []); // Fetch products once when the component mounts

    // useEffect(() => {
    //     // Filter products when minPrice or maxPrice change
    //     const filtered = products.filter((product) => {
    //       const price = product.total_price; // Adjust this based on your actual product structure
    //       if(price<=minPrice){
    //         console.log('1')
    //       }
    //       return price >= minPrice && price <= maxPrice;
    //     });

    //     // Update the filtered product list in the state
    //     setFilteredProducts(filtered);
    //   }, [minPrice, maxPrice, products]);
    useEffect(() => {
        // Filter products when minPrice changes
        const filtered = allplantsDetails.filter((product) => {
            const price = parseInt(product.total_price,10); // Adjust this based on your actual product structure
            return price < minPrice;
        });
        console.log(1,filtered)
        // Update the filtered product list in the state
        setFilteredProducts(filtered);
    }, [products]);
    // console.log(products)
    console.log(filteredProducts)
    // console.log(sliderValue)
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
                                        max={1000} // Assuming a maximum price, adjust as needed
                                        value={minPrice}
                                        onChange={(e) => setMinPrice(parseInt(e.target.value, 10))}
                                    />
                                    {minPrice}
                                </label>
                                <label>
                                    <input
                                        type="range"
                                        min={0}
                                        max={1000} // Assuming a maximum price, adjust as needed
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