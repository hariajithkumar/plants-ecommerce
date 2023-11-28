import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import Aside from '../Common/pages/Aside'

// image path 

import like from '../Common/assets/image/like.png'
import unlike from '../Common/assets/image/unlike.png'
import plant3 from '../Common/assets/image/plant_3.png'
import rating from '../Common/assets/image/Rating.png'
import add from '../Common/assets/image/addcard.png'
import remove from '../Common/assets/image/removecard.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';


import { useSelector, useDispatch } from 'react-redux';
import { setisAdded, setisIncrement, setisDecrement, setisLiked } from '../Redux/CreateSlice';
import { Link, useNavigate } from 'react-router-dom'

function Product() {

  const { isLiked, isAdded, isAddproduct, isAddproductcount } = useSelector((state) => state.plants_product)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product_like = () => {
    if (isLiked == false) {
      dispatch(setisLiked(true))
    } else {
      dispatch(setisLiked(false))
    }

  }
  const product_add = () => {
    dispatch(setisAdded(false))
    dispatch(setisIncrement())
  }
  const product_remove = () => {
    dispatch(setisAdded(true))
    dispatch(setisDecrement())
  }

  return (
    <div className='product-section'>
      <Header />
      <div className='product-view container-90'>
        <div className='row m-0'>
          <div className='col-3'>
            <Aside />
          </div>
          <div className='col-9'>
            <div className='product-list mt-5'>
              <div className='row m-0  py-4'>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                    <div className='text-center'>
                      {/* <Link to={`/Description/${1}`}><button className="sales-offer">View Details</button></Link> */}
                      <Link to={`/Description`}><button className="sales-offer">View Details</button></Link>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    {/* <button className='sales-offer'>Sale 50%</button> */}
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 mb-3'>
                  <div className={isAdded ? 'normal-box' : 'box-view'}>
                    <button className='sales-offer'>Sale 50%</button>
                    <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                    <img src={plant3} className='w-100' />
                    <div class="row m-0 product-details">
                      <div class="col-9">
                        <h5>Anthurium</h5>
                        <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                        <img src={rating} />
                      </div>
                      <div class="col-3">
                        {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                      </div>
                    </div>
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

export default Product