import React, { useState } from 'react'
import MainCarousel from '../components/MainSwiper'
import Product_Category from '../sections/home/Product_Category'
import sliderData from '../data.js/sliderData'
import Suggested_Product from '../sections/home/Suggested_Product'
import Footer from '../components/Footer'

const Home = () => {

   
    return (
        <>

            <div className='main-section p-0'>

                <div className='top-banner'>

                    <MainCarousel data={sliderData} slidesPerView={1} variant="mainBanner" />

                </div>

                <div className='product-Category m-10'>
                    <Product_Category />
                </div>

                <div className='suggested_products'>
                    <Suggested_Product />
                </div>

                <div className='footer'>
                    <Footer />
                </div>

                

               
            </div>
        </>
    )
}

export default Home
