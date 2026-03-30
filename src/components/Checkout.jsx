import React from 'react'

import image from '../assets/shoe.png'
import { useLocation } from 'react-router-dom'

const Checkout = ({ totalValue }) => {

    const location = useLocation();

    const cart = location.state?.Checkout || [];

    console.log(cart);


    return (

        <>

            <div className='grid grid-cols-2'>
                <div className='checkoutForm bg-black p-4'>
                    <form className='w-120 float-right mr-4'>
                        <h4 className='text-lg text-white pb-2 font-extrabold'>Contact</h4>

                        <label className='text-white text-sm'>Email</label><br />
                        <input type="text" className='border-1 w-full p-2 border-gray-300 rounded-md mt-2 text-white' placeholder='enter email id ' />

                        <h4 className='text-lg text-white pb-4 pt-3 font-extrabold'>Delivery</h4>

                        <label className='text-white text-sm'>Address</label><br />
                        <input type="text" className='border-1 w-full p-2 mb-3 border-gray-300 rounded-md mt-2 text-white' placeholder='enter email id ' />


                        <label className='text-white text-sm'>City</label><br />
                        <input type="text" className='border-1 w-full p-2  mb-3 border-gray-300 rounded-md mt-2 text-white' placeholder='enter email id ' />


                        <label className='text-white text-sm'>State</label><br />
                        <input type="text" className='border-1 w-full p-2  mb-3 border-gray-300 rounded-md mt-2 text-white' placeholder='enter email id ' />


                        <label className='text-white text-sm'>Pin Code</label><br />
                        <input type="text" className='border-1 w-full p-2 mb-3 border-gray-300 rounded-md mt-2 text-white' placeholder='enter email id ' />


                        <div className='text-center'>
                            <button className='default-bg py-2 px-8 rounded-md text-white mt-4'>Pay</button>
                        </div>

                    </form>
                </div>
                <div className='checkoutDetails bg-gray-500 p-10 text-white h-full'>
                    {
                        cart.map((item, i) => {
                            return (
                                <ul key={i} className='w-120 mr-4 mb-4'>
                                    <li className='py-1 flex items-center'>
                                        <div className='imgCount'><img src={item.img} className='w-15 bg-gray-300 p-1 pt-2 rounded-md' />
                                            <p className='count'>{item.quantity}</p></div>
                                        <p className='pl-4 w-full text-sm'>Sneakers for Men  <span className='float-right'>₹ {item.price}</span></p></li>
                                </ul>
                            )
                        })
                    }

                    <ul className='w-120 mr-4'>
                        <li className='pb-1 pt-3 text-sm'><p>SubTotal : <span className='float-right'>₹ {totalValue}</span></p></li>
                        <li className='py-1'><p className='font-semibold text-xl'>Total : <span className='float-right'>₹ {totalValue}</span></p></li>
                    </ul>

                </div>
            </div>
        </>

    )
}

export default Checkout
