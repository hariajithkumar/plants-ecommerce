import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'

import '../Common/assets/css/main.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart } from '@fortawesome/free-solid-svg-icons';

// image section 
import plant1 from '../Common/assets/image/plant_1.jpg'
import plant2 from '../Common/assets/image/plant_2.jpg'
import like from '../Common/assets/image/like.png'
import unlike from '../Common/assets/image/unlike.png'
import plant3 from '../Common/assets/image/plant_3.png'
import rating from '../Common/assets/image/Rating.png'
import add from '../Common/assets/image/addcard.png'
import remove from '../Common/assets/image/removecard.png'
import plant4 from '../Common/assets/image/plant_4.png'
import plant5 from '../Common/assets/image/plant_5.png'
import check from '../Common/assets/image/Check.png'
import pots1 from '../Common/assets/image/pots1.png'
import seller1 from '../Common/assets/image/seller1.png'
import address from '../Common/assets/image/address.png'
import message from '../Common/assets/image/message.png'
import contact from '../Common/assets/image/contact.png'


import { useSelector, useDispatch } from 'react-redux';
import { setisAdded, setisIncrement, setisDecrement, setisLiked } from '../Redux/CreateSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
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

  const all_product = () => {
    navigate('/Allproduct')
  }

  return (
    <div>
      <Header />
      <section className='pt-3'>
        <div className='container-90'>
          <div className='row m-0  product-img'>
            <div className='col-lg-8 col-md-6 col-12 p-0'>
              <img src={plant1} className='w-100 h-' />
            </div>
            <div className='col-lg-4 col-md-6 col-12 pe-0'>
              <div className='h-50'>
                <img src={plant2} className='w-100 h-100 pb-2' />
              </div>
              <div className="cards h-50 img-bg" >
                <div className="card-body card-content">
                  <h5>Best Deal</h5>
                  <h4>Special Products Deal of the Month</h4>
                  <p>Shop Now <FontAwesomeIcon icon={faArrowRight} style={{ color: '#00AF07' }} className='ps-2' /></p>
                </div>
              </div>
            </div>
          </div>
          <div className='product-list mt-5'>
            <span className='product-title'>Best sellers in indoor plants</span>
            <span className='float-end view-all' onClick={() => all_product()}>View All<FontAwesomeIcon icon={faArrowRight} style={{ color: '#056839' }} className='ps-2' /></span>
            <div className='row m-0 py-5'>
              <div className='col-3'>
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
              <div className='col-3'>
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
              <div className='col-3'>
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
              <div className='col-3'>
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
          <div className='plant-store mx-4'>
            <div className='row m-0 p-5 '>
              <div className='col-lg-6 col-12 slide-left visible'>
                <img src={plant4} className='image-1 pe-2' />
                <img src={plant5} className='image-2' />
              </div>
              <div className='col-lg-6 col-12 ps-5 slide-right visible'>
                <h3 className='w-50'>100% Trusted Plant Store</h3>
                <div className='row m-0'>
                  <div className='col-1 p-0'>
                    <img src={check} alt='check' />
                  </div>
                  <div className='col-11 p-0'>
                    <h4>Ut quis tempus erat. Phasellus euismod bibendum.</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  </div>
                  <div className='col-1 p-0'>
                    <img src={check} alt='check' />
                  </div>
                  <div className='col-11 p-0'>
                    <h4>Ut quis tempus erat. Phasellus euismod bibendum.</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                    <button>Shop Now <FontAwesomeIcon icon={faArrowRight} style={{ color: '#FFF' }} className='ps-2' /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pots-section mt-5'>
            <span className='product-title'>Best sellers in pots</span>
            <span className='float-end view-all'>View All<FontAwesomeIcon icon={faArrowRight} style={{ color: '#056839' }} className='ps-2' /></span>
            <div className='row m-0  py-5'>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={pots1} className='w-100' />
                  <div class="row m-0 product-details">
                    <div class="col-9">
                      <h5>Dual Ring Pot</h5>
                      <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                      <img src={rating} />
                    </div>
                    <div class="col-3">
                      {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  {/* <button className='sales-offer'>Sale 50%</button> */}
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={pots1} className='w-100' />
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
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={pots1} className='w-100 ' />
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
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={pots1} className='w-100' />
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
          <div className='best-seller mt-5'>
            <span className='product-title'>Best sellers in planting supplies</span>
            <span className='float-end view-all'>View All<FontAwesomeIcon icon={faArrowRight} style={{ color: '#056839' }} className='ps-2' /></span>
            <div className='row m-0  py-5'>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={seller1} className='w-100' />
                  <div class="row m-0 product-details">
                    <div class="col-9">
                      <h5>Blumenerde</h5>
                      <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                      <img src={rating} />
                    </div>
                    <div class="col-3">
                      {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  {/* <button className='sales-offer'>Sale 50%</button> */}
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={seller1} className='w-100' />
                  <div class="row m-0 product-details">
                    <div class="col-9">
                      <h5>Blumenerde</h5>
                      <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                      <img src={rating} />
                    </div>
                    <div class="col-3">
                      {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={seller1} className='w-100 ' />
                  <div class="row m-0 product-details">
                    <div class="col-9">
                      <h5>Blumenerde</h5>
                      <span className='price pe-2'>AED 14.99</span><span className='text-decoration-line-through rate'>AED 20.99</span>
                      <img src={rating} />
                    </div>
                    <div class="col-3">
                      {isAdded ? (<><img src={add} alt="Like Button" onClick={() => product_add()} /></>) : (<> <img src={remove} alt="Remove Button" onClick={() => product_remove()} /> </>)}
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-3'>
                <div className={isAdded ? 'normal-box' : 'box-view'}>
                  <button className='sales-offer'>Sale 50%</button>
                  <span className='float-end'><img src={isLiked ? like : unlike} alt="Like Button" onClick={() => product_like()} /></span>
                  <img src={seller1} className='w-100' />
                  <div class="row m-0 product-details">
                    <div class="col-9">
                      <h5>Blumenerde</h5>
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
          <div className='contact-info mx-4'>
            <div className='row m-0 p-5 '>
              <div className='col-3 '>
                <div className='contact-box'>
                  <img src={address} alt='location' />
                  <h4>Our Location</h4>
                  <p>PO BOX:115786 - Al Warsan3, Dubai, UAE.</p>
                </div>
              </div>
              <div className='col-3 '>
                <div className='contact-box'>
                  <img src={contact} alt='location' />
                  <h4>Call Us </h4>
                  <p className='number'>+971 5 65015231</p>
                </div>
              </div>
              <div className='col-6 '>
                <div className='contact-box'>
                  <img src={message} alt='location' />
                  <h4>Subscribe Newsletter</h4>
                  <div className="input-group input-set">
                    <input type="text" className="form-control" placeholder="Your email address" aria-label="Search" aria-describedby="searchButton" />
                    <button className="btn" type="button" id="searchButton">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Home