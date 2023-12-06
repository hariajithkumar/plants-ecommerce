import React, { useState } from 'react'

import '../assets/css/aside.css'

import shop from '../assets/image/header1.png'
import profile from '../assets/image/white-user.png'
import profile1 from '../assets/image/black_user.png'
import History from '../assets/image/history.png'
import History1 from '../assets/image/history_2.png'
import heart from '../assets/image/white-heart.png'
import heart1 from '../assets/image/block-heart.png'
import user from '../assets/image/wishlist.png'
import user1 from '../assets/image/black-shop.png'
import logouts from '../assets/image/logout.png'

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { setActiveItem } from '../../Redux/CreateSlice'
import { useLocation } from 'react-router-dom';

function Useraside() {
    const { activeItem } = useSelector((state) => state.plants_product)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handleItemClick = (item) => {
        dispatch(setActiveItem(item))
        if (item === 'Account') {
            navigate('/Profile')
        } else if (item === 'History') {
            navigate('/History')
        }else if (item === 'Wishlist') {
            navigate('/Wishlist')
        }else if (item === 'Cart') {
            navigate('/Purchase')
        }
    };
    const location = useLocation();
    const { pathname, search, hash } = location;
    const logout = () => {
        navigate('/Login')
    }
    const home = () => {
        navigate('/')
    }
    
    console.log(pathname)
    return (
        <div className='account-details'>
            <div className='user_aside'>
                <ul className="list-group">
                    <li className={`list-group-item border-0 view-all ${pathname === '/Profile' ? 'active' : ''}`} onClick={() => handleItemClick('Account')}>
                        <img src={pathname === '/Profile' ? profile1 : profile} className='pe-2' />My Account
                    </li>
                    <li className={`list-group-item border-0 view-all ${pathname === '/History' ? 'active' : ''}`} onClick={() => handleItemClick('History')}>
                        <img src={pathname === '/History' ? History1 : History} className='pe-2' />Order History
                    </li>
                    <li className={`list-group-item border-0 view-all ${pathname === '/Wishlist' ? 'active' : ''}`} onClick={() => handleItemClick('Wishlist')}>
                        <img src={pathname === '/Wishlist' ? heart1 : heart} className='pe-2' />Wishlist
                    </li>
                    <li className={`list-group-item border-0 view-all ${pathname === '/Purchase' ? 'active' : ''}`} onClick={() => handleItemClick('Cart')}>
                        <img src={pathname === '/Purchase' ? user1 : user} className='pe-2' />Cart
                    </li>
                    <li className={`list-group-item border-0 view-all ${activeItem === 'Log-out' ? 'active' : ''}`} onClick={() => logout()}>
                        <img src={logouts} className='pe-2' />Log-out
                    </li>
                </ul>
            </div>
            <div className='mt-5 text-center'>
                <button onClick={() => home()}>Return to shop</button>
            </div>
        </div>
    )
}

export default Useraside