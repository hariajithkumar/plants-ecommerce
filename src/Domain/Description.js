import React, { useState } from 'react';
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

import '../Common/assets/css/description.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop } from '@fortawesome/free-solid-svg-icons';

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

import { useNavigate } from 'react-router-dom';

function Description() {
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

    const buynow = () => {
        navigate('/Placeorder')
    }

    return (
        <div className='description-section'>
            <Header />
            <section className='description container-90 py-5'>
                <div className='row m-0'>
                    <div className='col-6'>
                        <div className='row m-0'>
                            <div className='col-2 py-5'>
                                <img src={description4} className='w-75 mb-2' />
                                <img src={description3} className='w-75 my-2' />
                                <img src={description2} className='w-75' />
                                <img src={description1} className='w-75 my-2' />
                            </div>
                            <div className='col-10'>
                                <img src={description4} className='w-100 h-100' />
                            </div>
                        </div>
                        <div className='text-center'>
                            {/* <button className='buynow'>Add to Cart <img src={shop} alt='shop' className='mx-2 p-0' /></button> */}
                            <button className='buynow' onClick={() => buynow()}>Buy Now <FontAwesomeIcon icon={faShop} className='mx-2' /></button>
                        </div>
                    </div>
                    <div className='col-6 description-details'>
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
                        <button className='add-card'>Add to Cart <img src={shop} alt='shop' className='mx-2 p-0' /></button>
                        <img src={heart} alt='heart' className='mx-2' />
                        <h4 className='cate my-4'>Category:<span>Indoor Plant</span></h4>
                        <div className='my-3'>
                            <span className='icon-plant'>Plant Info : </span>
                            <img src={icon1} className='me-3' />
                            <img src={icon2} className='me-3' />
                            <img src={icon3} className='me-3' />
                            <img src={icon4} className='me-3' />
                        </div>
                        <Nav tabs>
                            <NavItem className='plant-content'>
                                <NavLink
                                    className={activeTab === 'tab1' ? 'active' : ''}
                                    onClick={() => toggleTab('tab1')}
                                >
                                    Descriptions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'tab2' ? 'active' : ''}
                                    onClick={() => toggleTab('tab2')}
                                >
                                    Additional Information
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={activeTab === 'tab3' ? 'active' : ''}
                                    onClick={() => toggleTab('tab3')}
                                >
                                    Customer Feedback
                                </NavLink>
                            </NavItem>
                            {/* Add more tabs as needed */}
                        </Nav>
                        <TabContent activeTab={activeTab} className='mt-3'>
                            <TabPane tabId="tab1">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            <TabPane tabId="tab2">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            <TabPane tabId="tab3">
                                <p>Nyctanthes arbor-tristis, also known as the Night-flowering jasmine or Parijat (Parvati chi phula), is a species of Nyctanthes native to South Asia and Southeast Asia. Despite its common name, the species is not a "true jasmine" and not of the genus Jasminum. The tree is sometimes called the "tree of sorrow", because the flowers lose their brightness during daytime; the scientific name arbor-tristis also means "sad tree".</p>
                            </TabPane>
                            {/* Add more TabPanes as needed */}
                        </TabContent>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Description