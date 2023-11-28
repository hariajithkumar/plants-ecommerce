import React from 'react'
import Header from '../Common/pages/Header'
import Footer from '../Common/pages/Footer'
import Useraside from '../Common/pages/Useraside'

function Profile() {
  return (
    <div>
        <Header />
        <div className='container-90'>
            <div className='row m-0 py-5'>
                <div className='col-3'>
                    <Useraside />
                </div>
                <div className='col-6'>
                    <div id='profile'>
                        <h1>ajith</h1>
                    </div>
                </div>
                <div className='col-3'>

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Profile