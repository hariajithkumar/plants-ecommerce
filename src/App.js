import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

import Login from './Domain/Login'
import Register from './Domain/Register'
import Home from './Domain/Home';
import Product from './Domain/Product';
import Description from './Domain/Description';
import Profile from './Domain/Profile';
import History from './Domain/History';
import Wishlist from './Domain/Wishlist';
import Purchase from './Domain/Purchase';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.slide-up, .slide-left, .slide-right');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;

        if (isVisible) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/Allproduct' element={<Product />} />
        <Route path='/Description' element={<Description />}/>
        <Route path='/Profile' element={<Profile />} />
        <Route path='/History' element={<History />} />
        <Route path='/Wishlist' element={<Wishlist />} />
        <Route path='Purchase' element={<Purchase />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
