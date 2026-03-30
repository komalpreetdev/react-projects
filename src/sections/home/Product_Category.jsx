import React from 'react'
import MainCarousel from '../../components/MainSwiper'
import productData from '../../data.js/product_category_data'

const Product_Category = () => {
  return (
    <>
      <h4 className='text-3xl text-center font-semibold pt-10'>Product Category</h4>

      <p className='mb-10 product-cat-desc text-center pt-2 pb-10 w-200 m-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    
        <MainCarousel data={productData} slidesPerView={5} spaceBetween={30} variant="product-category" delay={0} />
    
    </>
  )
}

export default Product_Category
