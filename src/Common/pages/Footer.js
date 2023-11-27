import React from 'react'
import '../assets/css/footer.css'

// image path
import logo from '../assets/image/logo.png'
import global from '../assets/image/globe.png'
import email from '../assets/image/email.png'
import phone from '../assets/image/phone.png'
import icon1 from '../assets/image/footer-facebook.png'
import icon2 from '../assets/image/footer-twitter.png'
import icon3 from '../assets/image/footer-pinterest.png'
import icon4 from '../assets/image/footer-instagram.png'


function Footer() {
    return (
        <>
            <footer className='footer-section'>
                <div className='container-70 pt-5 pb-2'>
                    <div className='text-center'>
                        <img src={logo} />
                        <h6>Contact Us</h6>
                        <hr style={{ width: '20px', margin: '0 auto', border: '1px soild #056839' }} />
                        <p>PO BOX:115786 - Al Warsan3, Dubai, UAE.</p>
                        <div className='row m-0 py-3 icon-content '>
                            <div className='col-4 text-end p-0'>
                                <img src={global} className='pe-2' />
                                <span>govergardencentre@gmail.com</span>
                            </div>
                            <div className='col-4 p-0'>
                                <img src={email} className='pe-2' />
                                <span>gover@emirates.net.ae</span>
                            </div>
                            <div className='col-4 text-start p-0'>
                                <img src={phone} className='pe-2' />
                                <span>+971 5 65015231, +971 4 2872900</span>
                            </div>
                        </div>
                        <div className='icon-section'>
                            <img src={icon1} />
                            <img src={icon2} />
                            <img src={icon3} />
                            <img src={icon4} />
                        </div>
                    </div>
                </div>
                <hr />
                <div className='container-70 py-3 footer-list'>
                    <ul>
                        <li>My Account</li>
                        <li>Shop</li>
                        <li>Track Order</li>
                        <li>Faqs</li>
                        <li>About</li>
                        <li>Terms & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <h4 className='text-center'>Gover garden centre © 2023. All Rights Reserved</h4>
                </div>
            </footer>
        </>
    )
}

export default Footer