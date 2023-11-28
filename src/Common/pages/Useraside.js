import React, { useState } from 'react'

import '../assets/css/aside.css'

import shop from '../assets/image/header1.png'
import profile from '../assets/image/white-user.png'
import profile1 from '../assets/image/black_user.png'
import History from '../assets/image/history.png'
import History1 from '../assets/image/history_2.png'
import heart from '../assets/image/white-heart.png'
import heart1 from '../assets/image/block-heart.png'
import user from '../assets/image/white-user.png'
import user1 from '../assets/image/black_user.png'
import logouts from '../assets/image/logout.png'

import { useNavigate } from 'react-router-dom';


function Useraside() {
    const navigate = useNavigate()
    const [activeItem, setActiveItem] = useState('Account');
    const handleItemClick = (item) => {
        setActiveItem(item);
        if (item == 'Account') {
            navigate('/Profile')
        } else if (item == 'History') {
            navigate('/home')
        }
    };
    const logout = () => {
        navigate('/')
    }
    const home = () => {
        navigate('/home')
    }
    return (
        <div className='account-details'>
            <div className='user_aside'>
                <ul className="list-group">
                    <li className={`list-group-item border-0 view-all ${activeItem === 'Account' ? 'active' : ''}`} onClick={() => handleItemClick('Account')}>
                        <img src={activeItem == 'Account' ? profile1 : profile} className='pe-2' />My Account
                    </li>
                    <li className={`list-group-item border-0 view-all ${activeItem === 'History' ? 'active' : ''}`} onClick={() => handleItemClick('History')}>
                        <img src={activeItem == 'History' ? History1 : History} className='pe-2' />Order History
                    </li>
                    <li className={`list-group-item border-0 view-all ${activeItem === 'Wishlist' ? 'active' : ''}`} onClick={() => handleItemClick('Wishlist')}>
                        <img src={activeItem == 'Wishlist' ? heart1 : heart} className='pe-2' />Wishlist
                    </li>
                    <li className={`list-group-item border-0 view-all ${activeItem === 'Cart' ? 'active' : ''}`} onClick={() => handleItemClick('Cart')}>
                        <img src={activeItem == 'Cart' ? user1 : user} className='pe-2' />Cart
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